// This file manages product-related interactions.

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const cartButton = document.getElementById('add-to-cart');

    // Fetch and display products
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <button class="view-details" data-id="${product.id}">View Details</button>
                `;
                productContainer.appendChild(productCard);
            });

            // Add event listeners for view details buttons
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    const productId = e.target.getAttribute('data-id');
                    window.location.href = `/product.html?id=${productId}`;
                });
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Add to cart functionality
    cartButton.addEventListener('click', () => {
        const productId = cartButton.getAttribute('data-id');
        // Logic to add the product to the cart
        console.log(`Product ${productId} added to cart`);
    });
});