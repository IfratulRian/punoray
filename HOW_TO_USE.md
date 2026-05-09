# ShirtHub E-commerce Website - User Guide

## 🎉 Overview

Your complete shirt e-commerce website is ready with:
- ✅ 120+ shirt products (4 custom + 116 examples)
- ✅ Multi-page navigation (Home, Product Details, Cart, Checkout)
- ✅ 5 products per row on desktop
- ✅ Trending, New, Sale, and Top Rated sections
- ✅ Size and color selection
- ✅ Shopping cart with price breakdown (Product + VAT + Delivery)
- ✅ Complete checkout form (Name, Phone, Address, Payment Method)
- ✅ Product recommendations on detail pages
- ✅ Shop details in footer
- ✅ Admin panel for managing products

---

## 📸 How to Add/Edit Your Shirt Products

### Step 1: Add Product Images

1. Place your shirt images in this folder:
   ```
   /workspaces/default/code/src/imports/
   ```

2. Your 4 images are already there:
   - `RianCap.jpeg`
   - `riaNCOLL.jpeg`
   - `RianCool.jpeg`
   - `RianPunjabi.jpeg`

3. To add more images, just copy them to the same folder

### Step 2: Edit Product Details

1. Open this file:
   ```
   /workspaces/default/code/src/app/data/shirts.ts
   ```

2. Find the first 4 products at the top (these are your custom shirts)

3. Edit the details for each product:

```typescript
{
  id: '1',                              // Unique ID (don't change)
  name: 'Rian Cap Style Polo Shirt',    // ⬅️ EDIT: Product name
  price: 899,                           // ⬅️ EDIT: Current price in ₹
  originalPrice: 1299,                  // ⬅️ EDIT: Original price (for sale items)
  description: '...',                   // ⬅️ EDIT: Product description
  image: '/src/imports/RianCap.jpeg',   // ⬅️ EDIT: Path to your image
  images: ['/src/imports/RianCap.jpeg'], // ⬅️ EDIT: All product images
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],  // ⬅️ EDIT: Available sizes
  colors: ['Olive Green', 'Black'],     // ⬅️ EDIT: Available colors
  inStock: true,                        // ⬅️ EDIT: true or false
  rating: 4.8,                          // Rating (1.0 - 5.0)
  reviews: 45,                          // Number of reviews
  views: 523,                           // View count (affects trending)
  isNew: false,                         // ⬅️ EDIT: true = shows "New" badge
  isOnSale: true,                       // ⬅️ EDIT: true = shows sale badge
  isTrending: true,                     // ⬅️ EDIT: true = appears in trending
  isTopRated: true,                     // ⬅️ EDIT: true = appears in top rated
  dateAdded: '2026-04-15',             // Date added (YYYY-MM-DD)
}
```

4. Save the file - the website will automatically refresh!

### Step 3: Add New Products

To add a new shirt beyond the first 4:

1. Copy one of the existing product objects
2. Change the `id` to a unique number (e.g., '121', '122')
3. Update all the fields with your product details
4. Save the file

Example:
```typescript
{
  id: '121',
  name: 'My New Shirt',
  price: 999,
  description: 'Amazing new shirt...',
  image: '/src/imports/mynewshirt.jpeg',
  images: ['/src/imports/mynewshirt.jpeg'],
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Blue', 'White'],
  inStock: true,
  rating: 4.5,
  reviews: 0,
  views: 0,
  isNew: true,
  isOnSale: false,
  isTrending: false,
  isTopRated: false,
  dateAdded: '2026-05-05',
}
```

---

## 📦 How to Receive Orders

### Current Setup (Testing/Development)

When someone places an order:

1. **Console Log**: Open browser console (Press `F12`) to see complete order details
2. **localStorage**: Order is saved in browser localStorage (key: `latestOrder`)
3. **Order includes**:
   - Customer name, phone, email, address
   - Payment method (COD or Online)
   - All items ordered (with sizes and colors)
   - Price breakdown (subtotal + VAT + delivery)

**To view orders during testing:**
```javascript
// In browser console (F12), type:
localStorage.getItem('latestOrder')
```

### Production Setup (Real Orders)

To receive orders via email/WhatsApp/SMS, you need a backend. Here are options:

#### Option 1: Supabase (Easiest)
1. Create free account at [supabase.com](https://supabase.com)
2. Create a table called `orders`
3. Add these columns:
   - `id` (auto-increment)
   - `order_number` (text)
   - `customer_name` (text)
   - `customer_phone` (text)
   - `customer_email` (text)
   - `customer_address` (text)
   - `items` (json)
   - `total_amount` (decimal)
   - `payment_method` (text)
   - `created_at` (timestamp)
4. Update the checkout page to send data to Supabase
5. Set up email notifications in Supabase

#### Option 2: Email Service (SendGrid, Mailgun)
1. Sign up for SendGrid or Mailgun
2. Get API key
3. Create a serverless function to send emails
4. Update checkout to call your function

#### Option 3: WhatsApp Business API
1. Set up WhatsApp Business API
2. Create webhook endpoint
3. Send order notifications via WhatsApp

#### Option 4: Google Forms (Quick & Free)
1. Create a Google Form with order fields
2. Update checkout to submit to form
3. Receive email notifications from Google

---

## 🎨 Customize Shop Details

Edit your shop information in:
```
/workspaces/default/code/src/app/data/shopDetails.ts
```

Update:
- Shop name
- Contact info (phone, email, WhatsApp)
- Address
- Business hours
- Shipping settings (delivery charge, VAT)
- Social media links
- Policies (returns, exchange, warranty)

---

## 💰 Price Breakdown Explained

When customers checkout, they see:

1. **Subtotal**: Sum of all product prices
2. **VAT (10%)**: Tax calculated on subtotal
3. **Delivery Charge**: ₹50 (FREE if order > ₹2000)
4. **Total**: Subtotal + VAT + Delivery

To change these settings:
```typescript
// In src/app/data/shopDetails.ts
shipping: {
  deliveryCharge: 50,           // Change delivery charge
  freeDeliveryAbove: 2000,      // Free delivery threshold
  vatPercentage: 10,            // VAT percentage
}
```

---

## 🔥 Website Features

### Home Page
- Search bar
- 4 tabs: Trending, New Arrivals, On Sale, Top Rated
- All products section (100 per page)
- 5 products per row on desktop

### Product Detail Page
- Multiple product images
- Size selection (required)
- Color selection (required)
- Quantity selector
- Add to cart button
- Recommended products below

### Shopping Cart
- View all items
- Adjust quantities
- See price breakdown
- Clear cart option
- Proceed to checkout

### Checkout Page
- Customer info form (name, phone, email)
- Delivery address
- Payment method selection (COD or Online)
- Order summary
- Price breakdown
- Place order button

### Admin Panel
- Instructions for managing products
- Current statistics
- How to receive orders guide

---

## 🚀 Going Live

To make your website public:

1. **Get a domain name** (e.g., GoDaddy, Namecheap)
2. **Choose hosting**:
   - Vercel (easiest, free)
   - Netlify (easy, free)
   - AWS, DigitalOcean (more control)
3. **Set up backend** for order processing
4. **Configure payment gateway** (Razorpay, Stripe, PayPal)
5. **Add analytics** (Google Analytics)
6. **Set up email** for order notifications

---

## 📱 Mobile Responsive

The website is fully responsive and works on:
- Desktop (5 products per row)
- Tablet (3-4 products per row)
- Mobile (2 products per row)

---

## ❓ Need Help?

Visit the **Admin Panel** (click Admin in header) for:
- Step-by-step instructions
- Image upload guide
- Order receiving options
- Product management tips

---

## 📝 Quick Checklist

- [ ] Replace example shirts with your own products
- [ ] Update shop details (name, contact, address)
- [ ] Add your shirt images to `/src/imports/`
- [ ] Edit product details in `shirts.ts`
- [ ] Test the entire order flow
- [ ] Set up order receiving (backend)
- [ ] Configure payment methods
- [ ] Test on mobile devices
- [ ] Update social media links
- [ ] Go live!

---

**Congratulations! Your shirt e-commerce website is ready! 🎉**
