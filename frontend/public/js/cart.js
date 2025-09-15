// This file handles shopping cart functionality.

let cart = [];

// Function to add item to cart
function addToCart(productId, productName, productPrice) {
    const item = { id: productId, name: productName, price: productPrice, quantity: 1 };
    const existingItem = cart.find(cartItem => cartItem.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    updateCartDisplay();
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(cartItem => cartItem.id !== productId);
    updateCartDisplay();
}

// Function to update the quantity of an item in the cart
function updateCartQuantity(productId, quantity) {
    const item = cart.find(cartItem => cartItem.id === productId);
    if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        }
    }
    updateCartDisplay();
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to update cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - $${item.price} x ${item.quantity}`;
        cartContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement('div');
    totalElement.innerText = `Total: $${calculateTotal()}`;
    cartContainer.appendChild(totalElement);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Event listeners for cart actions can be added here
document.getElementById('clear-cart').addEventListener('click', clearCart);