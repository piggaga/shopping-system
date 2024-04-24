const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 注册用户
router.post('/register', userController.registerUser);

// 用户登录
router.post('/login', userController.loginUser);

module.exports = router;
