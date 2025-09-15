# E-commerce Site

This is a basic e-commerce site project that includes both frontend and backend components. The project allows users to browse products, manage a shopping cart, and process orders. It also includes user authentication features for login and registration.

## Project Structure

```
ecommerce-site
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── orderController.js
│   │   │   └── productController.js
│   │   ├── models
│   │   │   ├── order.js
│   │   │   ├── product.js
│   │   │   └── user.js
│   │   ├── routes
│   │   │   ├── auth.js
│   │   │   ├── order.js
│   │   │   └── product.js
│   │   └── db
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── product.html
│   │   ├── cart.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       ├── main.js
│   │       ├── cart.js
│   │       ├── product.js
│   │       └── auth.js
│   └── README.md
└── README.md
```

## Features

- **Product Listings**: Users can view a list of products available for purchase.
- **Product Details Page**: Each product has a dedicated page with detailed information.
- **Shopping Cart**: Users can add products to their cart and view their selections.
- **User Authentication**: Users can register and log in to their accounts.
- **Order Processing**: Users can place orders for the products in their cart.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (or any other database of your choice)

## Getting Started

1. Clone the repository.
2. Navigate to the `backend` directory and run `npm install` to install backend dependencies.
3. Set up your database connection in `backend/src/db/index.js`.
4. Start the backend server using `node src/app.js`.
5. Navigate to the `frontend` directory and open `public/index.html` in your browser to view the frontend.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.