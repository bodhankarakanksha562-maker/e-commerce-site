# E-commerce Site Backend

This is the backend part of the E-commerce site project built using Express.js. The backend is responsible for handling user authentication, product management, and order processing.

## Features

- User authentication (login and registration)
- Product management (listing and details)
- Order processing (creating and retrieving orders)

## Project Structure

```
backend
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controller files for handling requests
│   │   ├── authController.js # Handles user authentication
│   │   ├── orderController.js # Manages order processing
│   │   └── productController.js # Manages product-related operations
│   ├── models                # Contains model definitions for the database
│   │   ├── order.js          # Order model
│   │   ├── product.js        # Product model
│   │   └── user.js           # User model
│   ├── routes                # Contains route definitions
│   │   ├── auth.js           # Routes for authentication
│   │   ├── order.js          # Routes for order processing
│   │   └── product.js        # Routes for product management
│   └── db
│       └── index.js          # Database connection and configuration
├── package.json              # NPM configuration file
└── README.md                 # Documentation for the backend
```

## Getting Started

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install the dependencies using `npm install`.
4. Start the server using `npm start`.

## Dependencies

- Express.js
- Mongoose (for MongoDB)
- Body-parser
- Bcrypt (for password hashing)
- Jsonwebtoken (for authentication)

## License

This project is licensed under the MIT License.