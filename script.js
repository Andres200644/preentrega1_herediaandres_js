const products = [
    { id: 1, name: 'iPhone 15 Pro', price: 999, img: "./images/iphone 15 pro.png" },
    { id: 2, name: 'iPhone 15', price: 799, img: "./images/iphone 15.png" },
    { id: 3, name: 'iPhone 14', price: 699, img: "./images/iphone 14.png" },
    { id: 4, name: 'iPhone 13', price: 599, img: "./images/iphone 13.png" },
    { id: 5, name: 'Iphone SE', price: 450, img: "./images/iphone se.jpeg " },
    { id: 6, name: 'Airpods max', price: 549, img: "./images/Airpods Max.jpeg" },
    { id: 7, name: 'Airpods pro 2', price: 250, img: "./images/Airpods pro 2.jpeg" },
    { id: 8, name: 'Airpods 3', price: 169, img: "./images/Airpods 3.jpeg" },
    { id: 9, name: 'Airpods 2', price: 129, img: "./images/Airpods 2.jpeg" },
    { id: 10, name: 'Apple watch series 9', price: 499, img: "./images/wacth 9.jpeg " },
    { id: 11, name: 'Apple Watch ultra 2', price: 800, img: "./images/wacth ultra 2.jpeg " },
    { id: 12, name: 'Apple Watch se', price: 250, img: "./images/watch se.jpeg " },
    { id: 13, name: 'Samsung s24 ULTRA', price: 909, img: "./images/samsung.jpg " },
    { id: 14, name: 'Samsung s23 ULTRA', price: 800, img: "./images/samsung s23 ULTRA.jpg" },
    { id: 15, name: 'Samsung s23 FE', price: 699, img: "./images/Samsung s23 FE.jpg" },
    { id: 16, name: 'Beats Studio Buds', price: 169, img: "./images/beats.jpg " },
    { id: 17, name: 'Sony Noise-Canceling', price: 329, img: "./images/sony.jpg" },
    { id: 18, name: 'Sony - Pulse', price: 199, img: "./images/sony - p.jpg" },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-container')) {
        displayProducts(products);

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', searchProducts);
        }

        const filterSelect = document.getElementById('filter-select');
        if (filterSelect) {
            filterSelect.addEventListener('change', filterProducts);
        }
    }

    if (document.getElementById('cart-container')) {
        viewCart();
        document.getElementById('back-to-products').addEventListener('click', goBack);
        document.getElementById('checkout-btn').addEventListener('click', checkout);
    }
});

function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) return;

    productContainer.innerHTML = '';
    productsToDisplay.forEach(product => {
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

function searchProducts(event) {
    const query = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

function filterProducts(event) {
    const filterValue = event.target.value;
    let filteredProducts = [...products];
    if (filterValue) {
        filteredProducts = products.filter(product =>
            product.price <= parseFloat(filterValue)
        );
    }
    displayProducts(filteredProducts);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            icon: 'success',
            title: 'Fue agregado exitosamente',
            text: `${product.name} ha sido agregado al carrito.`,
            showConfirmButton: false,
            timer: 800
        }).then(() => {
            window.location.href = 'cart.html';
        });
    }
}

function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer || !cartTotal) return;

    cartContainer.innerHTML = '';
    cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito esta vacio.</p>';
        cartTotal.innerHTML = '';
        return;
    }

    let subtotal = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="removeFromCart(${product.id})">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);
        subtotal += product.price;
    });

    cartTotal.innerHTML = `Total: $${subtotal}`;
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
}

function goBack() {
    window.location.href = 'index.html';
}

function checkout() {
    if (cart.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Carrito vacio',
            text: 'No hay productos en el carrito para finalizar la compra.',
            showConfirmButton: true
        });
        return;
    }

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
    Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra!',
        text: 'Su pedido llegara pronto!',
        showConfirmButton: true
    }).then(() => {
        window.location.href = 'index.html';
    });
}