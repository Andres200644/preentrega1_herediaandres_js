const products = [
    { id: 1, name: 'iPhone 15', price: 999, img:"../JavaScript/images/iphone 15.jpg" },
    { id: 2, name: 'iPhone 14', price: 799, img: "../JavaScript/images/iphone 14 azul.jpg" },
    { id: 3, name: 'iPhone 15 pro', price: 999, img: "../JavaScript/images/iphone 15 pro negro.jpg" }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
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
        alert(`${product.name} ha sido agregado al carrito.`);
    }
}

function viewCart() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    let cartContent = 'Productos en el carrito:\n\n';
    let total = 0;
    cart.forEach((product, index) => {
        cartContent += `${index + 1}. ${product.name} - $${product.price}\n`;
        total += product.price;
    });
    cartContent += `\nTotal: $${total}`;
    alert(cartContent);
}

function searchProduct() {
    const searchTerm = prompt('Ingrese el nombre del producto que desea buscar:').toLowerCase();
    const foundProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    if (foundProducts.length > 0) {
        let searchResults = 'Resultados de la búsqueda:\n\n';
        foundProducts.forEach(product => {
            searchResults += `${product.name} - $${product.price}\n`;
        });
        alert(searchResults);
    } else {
        alert('No se encontraron productos.');
    }
}

function removeFromCart() {
    const productName = prompt('Ingrese el nombre del producto que desea eliminar del carrito:').toLowerCase();
    const productIndex = cart.findIndex(product => product.name.toLowerCase() === productName);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1)[0];
        alert(`${removedProduct.name} ha sido eliminado del carrito.`);
    } else {
        alert('Producto no encontrado en el carrito.');
    }
}
