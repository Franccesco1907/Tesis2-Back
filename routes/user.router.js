const express = require('express');
const UserService = require('./../services/user.service');

const router = express.Router();
const userService = new UserService();

router.get('/', async (req, res) => {
  try {
    const users = await(userService.getUsers());
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;