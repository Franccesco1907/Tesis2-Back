const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function load(file, dependencies) {
  const context = { module: { exports: {} }, require: name => dependencies[name], console };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
  return context.module.exports;
}

async function main() {
  const queries = [];
  const Service = load('services/auth.service.js', {
    '../libs/sequelize': { query: async (...args) => { queries.push(args); return [[{ id_usuario: 1 }]]; } }
  });
  const service = new Service();
  const email = "' OR 1=1 --";
  const password = "' OR '1'='1";
  await service.userExist(email);
  await service.passwordIncorrect(email, password);
  await service.getUserByLogin(email, password);
  for (const [sql, options] of queries) {
    assert(!sql.includes(email), 'input must never become SQL text');
    assert(!sql.includes(password), 'password must never become SQL text');
    assert.equal(options.replacements.email, email);
    if (sql.includes(':password')) assert.equal(options.replacements.password, password);
  }

  let handler;
  const calls = [];
  let exists = false;
  let wrongPassword = true;
  let failure;
  load('routes/auth.router.js', {
    express: { Router: () => ({ post: (_, fn) => { handler = fn; } }) },
    './../services/auth.service': class {
      async userExist() { calls.push('exists'); if (failure) throw failure; return exists; }
      async passwordIncorrect() { calls.push('password'); return wrongPassword; }
      async getUserByLogin() { calls.push('user'); return { id: 1 }; }
    }
  });
  const response = () => ({ statuses: [], bodies: [], status(code) { this.statuses.push(code); return this; }, json(body) { this.bodies.push(body); return this; } });
  let res = response();
  await handler({ body: { email, password } }, res, () => assert.fail('unexpected error'));
  assert.deepEqual(calls, ['exists']);
  assert.deepEqual(res.statuses, [409]);
  exists = true;
  calls.length = 0;
  res = response();
  await handler({ body: { email, password } }, res, () => assert.fail('unexpected error'));
  assert.deepEqual(calls, ['exists', 'password']);
  assert.deepEqual(res.statuses, [409]);
  wrongPassword = false;
  res = response();
  await handler({ body: { email, password } }, res, () => assert.fail('unexpected error'));
  assert.deepEqual(res.statuses, [200]);
  failure = new Error('database unavailable');
  let received;
  res = response();
  await handler({ body: {} }, res, error => { received = error; });
  assert.equal(received, failure);
  assert.equal(res.bodies.length, 0);
  console.log('PASS: parameter binding and missing-user, wrong-password, success and database-error responses');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
