import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, enum: ['male', 'female','jewerely']},
    sizes: [
        {
            size: { type: String, required: true },
            countInStock: { type: Number, required: true, default: 0 }
        }
    ]
});

const Product = mongoose.model('Product', productSchema);


export default Product;

