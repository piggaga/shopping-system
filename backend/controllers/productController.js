const Product = require('../models/product');

// 添加产品
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    // 创建新产品
    const newProduct = new Product({
      name,
      price,
      description,
      imageUrl
    });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// 获取所有产品
exports.getAllProducts = async (req, res) => {
  try {
    // 查找所有产品
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
