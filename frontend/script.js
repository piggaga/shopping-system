// 定义 fetchProducts 函数
function fetchProducts() {
    fetch('/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(products => {
            // 在页面上显示商品列表
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
}

// 定义 displayProducts 函数
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // 清空商品容器
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        // 填充商品信息
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
            <img src="${product.imageUrl}" alt="${product.name}">
        `;
        
        productsContainer.appendChild(productElement);
    });
}

// 在页面加载完成后执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取商品列表
    fetchProducts();
});
