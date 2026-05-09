export interface Shirt {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  views: number;
  isNew: boolean;
  isOnSale: boolean;
  isTrending: boolean;
  isTopRated: boolean;
  dateAdded: string;
}

// HOW TO ADD/EDIT PRODUCTS:
// 1. To add your own shirt images, place them in /workspaces/default/code/src/imports/ folder
// 2. Update the 'image' field with the path: '/src/imports/YourImageName.jpeg'
// 3. For multiple product images, add them to the 'images' array
// 4. Update name, price, description, sizes, and other details
// 5. Set isOnSale to true and add originalPrice for sale items
// 6. Set isNew to true for new arrivals
// 7. Available sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']
// 8. Save this file after making changes

export const shirts: Shirt[] = [
  // YOUR CUSTOM SHIRTS - Edit these examples with your actual products
  {
    id: '1',
    name: 'Rian Cap Style Polo Shirt',
    price: 899,
    originalPrice: 1299,
    description: 'Comfortable polo shirt with cap style collar, perfect for casual wear. Made from premium cotton blend fabric.',
    image: '/src/imports/RianCap.jpeg',
    images: ['/src/imports/RianCap.jpeg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive Green', 'Black', 'Navy'],
    inStock: true,
    rating: 4.8,
    reviews: 45,
    views: 523,
    isNew: false,
    isOnSale: true,
    isTrending: true,
    isTopRated: true,
    dateAdded: '2026-04-15',
  },
  {
    id: '2',
    name: 'Rian Formal Collar Shirt',
    price: 1499,
    description: 'Professional formal shirt with classic collar design. Perfect for business meetings and formal occasions.',
    image: '/src/imports/riaNCOLL.jpeg',
    images: ['/src/imports/riaNCOLL.jpeg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Blue'],
    inStock: true,
    rating: 4.9,
    reviews: 78,
    views: 892,
    isNew: false,
    isOnSale: false,
    isTrending: true,
    isTopRated: true,
    dateAdded: '2026-04-10',
  },
  {
    id: '3',
    name: 'Rian Cool Casual Shirt',
    price: 799,
    originalPrice: 999,
    description: 'Stylish casual shirt with modern fit. Breathable fabric perfect for everyday wear and casual outings.',
    image: '/src/imports/RianCool.jpeg',
    images: ['/src/imports/RianCool.jpeg'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey'],
    inStock: true,
    rating: 4.7,
    reviews: 56,
    views: 678,
    isNew: true,
    isOnSale: true,
    isTrending: true,
    isTopRated: false,
    dateAdded: '2026-05-01',
  },
  {
    id: '4',
    name: 'Rian Punjabi Traditional Shirt',
    price: 1899,
    description: 'Traditional Punjabi style shirt with intricate embroidery. Perfect for festivals and special occasions.',
    image: '/src/imports/RianPunjabi.jpeg',
    images: ['/src/imports/RianPunjabi.jpeg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['White', 'Cream', 'Off-White'],
    inStock: true,
    rating: 5.0,
    reviews: 134,
    views: 1245,
    isNew: false,
    isOnSale: false,
    isTrending: true,
    isTopRated: true,
    dateAdded: '2026-03-20',
  },

  // EXAMPLE SHIRTS (120 total) - Replace with your actual products
  {
    id: '5',
    name: 'Classic White Oxford Shirt',
    price: 699,
    description: 'Timeless white oxford shirt with button-down collar. Essential wardrobe staple for any occasion.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1602810318383-e386cc3a3ccf?w=800&q=80'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    views: 456,
    isNew: false,
    isOnSale: false,
    isTrending: false,
    isTopRated: true,
    dateAdded: '2026-03-15',
  },
  {
    id: '6',
    name: 'Navy Blue Linen Shirt',
    price: 899,
    originalPrice: 1199,
    description: 'Breathable linen shirt in navy blue. Perfect for summer and hot weather conditions.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy Blue', 'Light Blue', 'White'],
    inStock: true,
    rating: 4.5,
    reviews: 67,
    views: 534,
    isNew: false,
    isOnSale: true,
    isTrending: true,
    isTopRated: false,
    dateAdded: '2026-03-25',
  },
  {
    id: '7',
    name: 'Slim Fit Black T-Shirt',
    price: 499,
    description: 'Modern slim fit black t-shirt. Comfortable cotton fabric with excellent durability.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
    colors: ['Black', 'White', 'Grey', 'Navy'],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    views: 1567,
    isNew: false,
    isOnSale: false,
    isTrending: true,
    isTopRated: true,
    dateAdded: '2026-02-10',
  },
  {
    id: '8',
    name: 'Striped Cotton Shirt',
    price: 799,
    originalPrice: 999,
    description: 'Classic striped cotton shirt with regular fit. Versatile design for casual and semi-formal wear.',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue/White', 'Black/White', 'Red/White'],
    inStock: true,
    rating: 4.4,
    reviews: 45,
    views: 389,
    isNew: true,
    isOnSale: true,
    isTrending: false,
    isTopRated: false,
    dateAdded: '2026-04-28',
  },
  {
    id: '9',
    name: 'Denim Blue Casual Shirt',
    price: 1099,
    description: 'Rugged denim shirt in classic blue. Durable and stylish for everyday casual wear.',
    image: 'https://images.unsplash.com/photo-1598032895397-b9372bb7e05e?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1598032895397-b9372bb7e05e?w=800&q=80'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Denim Blue', 'Light Denim', 'Black Denim'],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    views: 890,
    isNew: false,
    isOnSale: false,
    isTrending: true,
    isTopRated: true,
    dateAdded: '2026-03-05',
  },
  {
    id: '10',
    name: 'Red Checked Flannel Shirt',
    price: 999,
    originalPrice: 1399,
    description: 'Warm flannel shirt with red checked pattern. Perfect for winter and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Red/Black', 'Blue/Black', 'Green/Black'],
    inStock: true,
    rating: 4.6,
    reviews: 78,
    views: 567,
    isNew: false,
    isOnSale: true,
    isTrending: false,
    isTopRated: true,
    dateAdded: '2026-03-18',
  },

  // Continue with more shirts (I'll generate variations to reach 120 total)
];

// Generate remaining shirts to reach 120 total
const shirtTemplates = [
  { name: 'Cotton T-Shirt', basePrice: 499, category: 'casual' },
  { name: 'Polo Shirt', basePrice: 799, category: 'smart-casual' },
  { name: 'Formal Dress Shirt', basePrice: 1299, category: 'formal' },
  { name: 'Henley Shirt', basePrice: 699, category: 'casual' },
  { name: 'Plaid Shirt', basePrice: 899, category: 'casual' },
  { name: 'Linen Shirt', basePrice: 999, category: 'summer' },
  { name: 'Oxford Shirt', basePrice: 799, category: 'smart-casual' },
  { name: 'Chambray Shirt', basePrice: 899, category: 'casual' },
  { name: 'Flannel Shirt', basePrice: 999, category: 'winter' },
  { name: 'Hawaiian Shirt', basePrice: 799, category: 'vacation' },
];

const colors = ['Black', 'White', 'Navy', 'Grey', 'Blue', 'Red', 'Green', 'Maroon', 'Olive', 'Beige'];
const shirtImages = [
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
  'https://images.unsplash.com/photo-1602810316693-3667f6f8e4d0?w=800&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80',
  'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80',
  'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&q=80',
  'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
  'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80',
];

for (let i = 11; i <= 120; i++) {
  const template = shirtTemplates[i % shirtTemplates.length];
  const color = colors[i % colors.length];
  const image = shirtImages[i % shirtImages.length];
  const isOnSale = i % 4 === 0;
  const isNew = i % 7 === 0;
  const isTrending = i % 5 === 0;
  const isTopRated = i % 6 === 0;
  const views = Math.floor(Math.random() * 2000) + 100;
  const rating = parseFloat((4.0 + Math.random() * 1).toFixed(1));
  const reviews = Math.floor(Math.random() * 200) + 10;

  shirts.push({
    id: String(i),
    name: `${color} ${template.name}`,
    price: template.basePrice + (i * 10),
    originalPrice: isOnSale ? template.basePrice + (i * 10) + 300 : undefined,
    description: `High-quality ${color.toLowerCase()} ${template.name.toLowerCase()} made from premium materials. Perfect for ${template.category} occasions.`,
    image,
    images: [image],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [color, 'White', 'Black'],
    inStock: i % 15 !== 0,
    rating,
    reviews,
    views,
    isNew,
    isOnSale,
    isTrending,
    isTopRated,
    dateAdded: `2026-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
  });
}

// Helper functions for filtering
export const getTrendingShirts = () =>
  shirts.filter(s => s.isTrending).sort((a, b) => b.views - a.views);

export const getNewShirts = () =>
  shirts.filter(s => s.isNew).sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());

export const getSaleShirts = () =>
  shirts.filter(s => s.isOnSale);

export const getTopRatedShirts = () =>
  shirts.filter(s => s.isTopRated).sort((a, b) => b.rating - a.rating);

export const getRecommendedShirts = (currentShirtId: string, limit: number = 6) => {
  return shirts.filter(s => s.id !== currentShirtId && s.inStock).slice(0, limit);
};
