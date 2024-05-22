const products = [
    { id: 1, name: 'Apple iPhone 15 (128 GB) - Azul', price: 17909, oldPrice: 19499, img: "./images/iphone 15.jpg" },
    { id: 2, name: 'Apple iPhone 15 (256 GB) - Negro', price: 19907, oldPrice: 21499, img: "./images/iphone 15 negro.jpg" },
    { id: 3, name: 'Apple iPhone 15 Pro (128 GB) - Titanio Negro', price: 22180, oldPrice: 23999, img: "./images/iphone 15 pro negro.jpg" },
    { id: 4, name: 'Apple iPhone 14 Pro Max (128 GB) - Morado (Reacondicionado)', price: 16818, img: "./images/iphone 14 pro max Reacondicionado.jpg" },
    { id: 5, name: 'Apple iPhone 14 (128 GB) - Negro', price: 20801, oldPrice: 10538, img: "./images/iphone 14 azul.jpg" },

];

let cart = [];

function displayProducts(productsToDisplay) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">Precio: $${product.price}</p>
            ${product.oldPrice ? `<p class="old-price">Precio de lista: $${product.oldPrice}</p>` : ''}
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Precio: $${item.price}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        displayCart();
        alert(`Producto "${product.name}" agregado al carrito`);
    } else {
        alert('Producto no encontrado');
    }
}

function removeFromCart(index) {
    const product = cart[index];
    cart.splice(index, 1);
    displayCart();
    alert(`Producto "${product.name}" eliminado del carrito`);
}

function searchProduct() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    displayProducts(filteredProducts);
}

displayProducts(products);
displayCart();
