// This file contains the main JavaScript logic for the frontend.
// It initializes event listeners and handles navigation between pages.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            loadPage(targetPage);
        });
    });

    // Function to load pages dynamically
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.querySelector('#content').innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(products => {
        const container = document.getElementById('products');
        container.innerHTML = '';
        products.forEach(p => {
          const div = document.createElement('div');
          div.className = 'product-item';
          div.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <p>Price: $${p.price}</p>
            <button class="add-to-cart" data-id="${p._id}">Add to Cart</button>
            <a href="product.html?id=${p._id}">View Details</a>
          `;
          container.appendChild(div);
        });

        // Attach event listeners to all Add to Cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
          btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({ productId, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Added to cart!');
          });
        });
      })
      .catch(err => {
        document.getElementById('products').innerText = 'Could not load products.';
        console.error(err);
      });
});