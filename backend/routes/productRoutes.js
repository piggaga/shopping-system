const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// 添加产品
router.post('/', productController.addProduct);

// 获取所有产品
router.get('/', productController.getAllProducts);

module.exports = router;
