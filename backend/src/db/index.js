const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

use ecommerce
db.products.insertOne({
  name: "Red T-Shirt",
  description: "A stylish red t-shirt for all occasions.",
  price: 19.99,
  image: "https://via.placeholder.com/150"
})

module.exports = connectDB;