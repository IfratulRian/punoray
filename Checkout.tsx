export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 129.99,
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life. Experience crystal-clear audio quality with deep bass and comfortable over-ear design.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
    ],
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 299.99,
    description: 'Advanced smartwatch with fitness tracking, heart rate monitor, GPS, and water resistance. Stay connected with notifications and customize with multiple watch faces.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
    ],
    inStock: true,
    rating: 4.8,
    reviews: 256,
  },
  {
    id: '3',
    name: 'Leather Backpack',
    price: 89.99,
    description: 'Stylish genuine leather backpack with laptop compartment, multiple pockets, and durable construction. Perfect for work, travel, or everyday use.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
    ],
    inStock: true,
    rating: 4.3,
    reviews: 89,
  },
  {
    id: '4',
    name: 'Running Shoes',
    price: 119.99,
    description: 'High-performance running shoes with responsive cushioning, breathable mesh upper, and durable rubber outsole. Designed for comfort and speed.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    ],
    inStock: true,
    rating: 4.6,
    reviews: 342,
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 79.99,
    description: 'Programmable coffee maker with 12-cup capacity, auto-shutoff, and brew strength control. Wake up to fresh coffee every morning.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    ],
    inStock: true,
    rating: 4.4,
    reviews: 167,
  },
  {
    id: '6',
    name: 'Yoga Mat',
    price: 39.99,
    description: 'Non-slip yoga mat with extra cushioning and carrying strap. Perfect for yoga, pilates, and floor exercises. Easy to clean and maintain.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    ],
    inStock: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: '7',
    name: 'Sunglasses',
    price: 149.99,
    description: 'Designer sunglasses with UV protection, polarized lenses, and lightweight frame. Classic style that never goes out of fashion.',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    inStock: false,
    rating: 4.2,
    reviews: 95,
  },
  {
    id: '8',
    name: 'Desk Lamp',
    price: 59.99,
    description: 'Modern LED desk lamp with adjustable brightness, color temperature control, and USB charging port. Energy-efficient and eye-friendly.',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    inStock: true,
    rating: 4.5,
    reviews: 134,
  },
];
