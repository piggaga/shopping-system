const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// 数据库连接
mongoose.connect('mongodb://localhost:27017/shopping_system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

app.use(express.json());

// 用户路由
app.use('/api/users', userRoutes);
// 产品路由
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
