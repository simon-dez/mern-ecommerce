import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    sizes: [
        {
            size: { type: String, required: true },
            countInStock: { type: Number, required: true, default: 0 }
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

const sampleProducts = [
  {
    _id: '1',
    name: 'Classic Leather Jacket',
    price: 199.99,
    description: 'A timeless leather jacket that never goes out of style. Perfect for any occasion.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/10e560d061126eff/eCom-813942Y2J022104_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 5 },
      { size: 'S', countInStock: 10 },
      { size: 'M', countInStock: 15 },
      { size: 'L', countInStock: 8 },
      { size: 'XL', countInStock: 6 }
    ]
  },
  {
    _id: '2',
    name: 'Elegant Evening Dress',
    price: 149.99,
    description: 'An elegant evening dress that will make you stand out at any event.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/2346d8c3a140d507/Medium2-817949Y2L822630_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 3 },
      { size: 'S', countInStock: 7 },
      { size: 'M', countInStock: 12 },
      { size: 'L', countInStock: 9 },
      { size: 'XL', countInStock: 4 }
    ]
  },
  {
    _id: '3',
    name: 'Casual Denim Jeans',
    price: 59.99,
    description: 'Comfortable and stylish denim jeans for everyday wear.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/4441f7a6edc7962e/Medium2-821895Y405W7557_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 8 },
      { size: 'S', countInStock: 6 },
      { size: 'M', countInStock: 11 },
      { size: 'L', countInStock: 5 },
      { size: 'XL', countInStock: 3 }
    ]
  },
  {
    _id: '4',
    name: 'Sporty Running Shoes',
    price: 89.99,
    description: 'High-performance running shoes designed for comfort and durability.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/4441f7a6edc7962e/Medium2-821895Y405W7557_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 4 },
      { size: 'S', countInStock: 9 },
      { size: 'M', countInStock: 14 },
      { size: 'L', countInStock: 7 },
      { size: 'XL', countInStock: 1 }
    ]
  },
  {
    _id: '5',
    name: 'Stylish Handbag',
    price: 129.99,
    description: 'A stylish handbag that complements any outfit.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/4441f7a6edc7962e/Medium2-821895Y405W7557_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 2 },
      { size: 'S', countInStock: 5 },
      { size: 'M', countInStock: 10 },
      { size: 'L', countInStock: 6 },
      { size: 'XL', countInStock: 7 }
    ]
  },
  {
    _id: '6',
    name: 'Luxury Watch',
    price: 299.99,
    description: 'A luxury watch that combines elegance and functionality.',
    imageUrl: 'https://saint-laurent.dam.kering.com/m/4441f7a6edc7962e/Medium2-821895Y405W7557_A.jpg',
    sizes: [
      { size: 'XS', countInStock: 6 },
      { size: 'S', countInStock: 3 },
      { size: 'M', countInStock: 8 },
      { size: 'L', countInStock: 12 },
      { size: 'XL', countInStock: 5 }
    ]
  },
];

export { Product, sampleProducts };
