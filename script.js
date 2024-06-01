const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, img: "./images/iphone 15 pro.png" },
    { id: 2, name: 'iPhone 15', price: 799, img: "./images/iphone 15.png" },
    { id: 3, name: 'iPhone 14', price: 699, img: "./images/iphone 14.png" },
    { id: 4, name: 'iPhone 13', price: 599, img: "./images/iphone 13.png" },
    { id: 5, name: 'iPhone SE', price: 429, img: "./images/iphone se.jpeg " },
    { id: 6, name: 'Airpods max', price: 549, img: "./images/Airpods Max.jpeg" },
    { id: 7, name: 'Airpods pro 2', price: 250, img: "./images/Airpods pro 2.jpeg" },
    { id: 8, name: 'Airpods 3', price: 169, img: "./images/Airpods 3.jpeg" },
    { id: 9, name: 'Airpods 2', price: 129, img: "./images/Airpods 2.jpeg" },
    { id: 10, name: 'Apple watch series 9', price: 499, img: "./images/wacth 9.jpeg " },
    { id: 10, name: 'Apple Watch ultra 2', price: 800, img: "./images/wacth ultra 2.jpeg " },
    { id: 11, name: 'Apple Watch se', price: 250, img: "./images/watch se.jpeg " },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-container')) {
        displayProducts();
    }
    if (document.getElementById('cart-container')) {
        viewCart();
        document.getElementById('back-to-products').addEventListener('click', goBack);
    }
});

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            icon: 'success',
            title: 'Fue agregado exitosamente',
            text: `${product.price} ha sido agregado al carrito.`,
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            window.location.href = 'cart.html';
        });
    }
}

function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No hay nada en el carrito.</p>';
        return;
    }

    let subtotal = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `      
                    <img src="${product.img}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <h2>${product.price}</h2>
                        <div class="item-details">
                        <button class="remove-btn" onclick="removeFromCart(${product.id})">Eliminar</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
        subtotal += product.price;
    });

    const summary = document.createElement('div');
    summary.className = 'summary';
    summary.innerHTML = `
        <h2>Total: $${subtotal.toFixed(2)}</h2>
    `;
    cartContainer.appendChild(summary);
}

function removeFromCart(productId) {
    const product = cart.find(p => p.id === productId);
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
    Swal.fire({
        icon: 'info',
        title: 'Eliminado',
        text: `${product.name} ha sido eliminado del carrito.`,
        showConfirmButton: false,
        timer: 1500
    });
}

function goBack() {
    window.location.href = 'productos.html';
}