# 👕 ShirtHub - Premium Shirt E-commerce Website

A complete, modern, and fully-featured e-commerce website for selling shirts online with direct purchase capabilities, email notifications, and beautiful animations.

---

## 🎉 What's Included

✨ **120+ Shirt Products** (4 custom + 116 examples)  
🛍️ **Direct "Buy Now"** purchase on every product  
📧 **Email Notifications** for order details  
🎨 **Beautiful Animations** throughout the site  
💳 **Complete Checkout** with customer details  
🛒 **Shopping Cart** with price breakdown  
📱 **Fully Responsive** design  
⚡ **Fast & Modern** React application  

---

## 🚀 Quick Start

### 1. Add Your Products

Edit your shirt details in:
```
/workspaces/default/code/src/app/data/shirts.ts
```

The first 4 products are yours - just update:
- Name, price, description
- Image path: `/src/imports/YourImage.jpeg`
- Sizes, colors, stock status

### 2. Add Your Images

Place your shirt photos in:
```
/workspaces/default/code/src/imports/
```

Your 4 images are already there:
- `RianCap.jpeg`
- `riaNCOLL.jpeg`
- `RianCool.jpeg`
- `RianPunjabi.jpeg`

### 3. Set Up Email Notifications

Follow the guide to receive order emails:
```
EMAIL_SETUP_GUIDE.md
```

Quick setup with EmailJS (5 minutes):
1. Create free account at emailjs.com
2. Get Service ID, Template ID, Public Key
3. Update `/api/send-purchase-email.ts`
4. Done! Orders will email you automatically

### 4. Customize Shop Details

Edit your store information:
```
/workspaces/default/code/src/app/data/shopDetails.ts
```

Update: name, contact, address, hours, policies

---

## 📚 Documentation Files

| File | Description |
|------|-------------|
| **[HOW_TO_USE.md](HOW_TO_USE.md)** | Complete guide for managing products |
| **[EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md)** | Email integration tutorial |
| **[ORDER_DETAILS_FORMAT.md](ORDER_DETAILS_FORMAT.md)** | Order data structure & receiving orders |
| **[ANIMATION_FEATURES.md](ANIMATION_FEATURES.md)** | Animation customization guide |
| **[COMPLETE_FEATURE_LIST.md](COMPLETE_FEATURE_LIST.md)** | All features explained |

---

## 🎯 Key Features

### 🛍️ Direct Purchase
- **"Buy Now" button** on every product
- Quick purchase modal with form
- Collects: Name, Phone, Address, Payment Method
- **Emails you** the order details instantly
- No cart needed for single items

### 💰 Price Breakdown
Every order shows:
1. **Product Cost** - Base price × quantity
2. **VAT/Tax** - 10% of subtotal
3. **Delivery Charge** - ₹50 (FREE above ₹2000)
4. **Total** - Complete amount

### 📧 Order Notifications
When customer places order:
- Order logged to console (for testing)
- Order saved to localStorage (backup)
- **Email sent to you** with all details
- Customer gets order number

### 🎨 Animations
- Cards slide in one by one
- Images zoom on hover
- Smooth page transitions
- Bouncing success checkmarks
- Cart badge pops when items added
- Social icons rotate on hover

---

## 📱 How It Works

### For Customers:

1. **Browse** products on home page
2. **Click** product to see details
3. **Select** size and color
4. **Click "Buy Now"** (or Add to Cart)
5. **Fill form**: Name, Phone, Address, Payment
6. **Confirm purchase**
7. **Get order number**

### For You (Shop Owner):

1. **Receive email** with order details
2. **See** customer info, product, payment method
3. **Contact** customer to confirm
4. **Process** order and ship
5. **Profit!** 💰

---

## 🎯 Current Setup

### ✅ Working Now:
- Full website with 120+ products
- Buy Now on every product
- Shopping cart system
- Complete checkout
- Order logging to console
- Order saved in localStorage
- Beautiful animations
- Responsive design

### 📧 Needs Configuration:
- Email notifications (5 min setup)
- Payment gateway (optional)
- Database storage (optional)

---

## 🔧 Tech Stack

- **React 18** - Modern UI framework
- **React Router** - Multi-page navigation
- **Tailwind CSS v4** - Styling
- **Motion** - Smooth animations
- **Sonner** - Toast notifications
- **Radix UI** - Component primitives
- **EmailJS** - Email service (ready to configure)

---

## 📦 File Structure

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   │   ├── ShirtCard.tsx      # Product card with Buy Now
│   │   │   ├── PurchaseModal.tsx  # Direct purchase form
│   │   │   ├── Header.tsx         # Top navigation
│   │   │   ├── Footer.tsx         # Shop details
│   │   │   └── ui/                # UI components
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx           # Main page
│   │   │   ├── ProductDetail.tsx  # Product page
│   │   │   ├── Cart.tsx           # Shopping cart
│   │   │   ├── Checkout.tsx       # Checkout form
│   │   │   └── Admin.tsx          # Admin panel
│   │   ├── data/           # Product data
│   │   │   ├── shirts.ts          # 120+ products
│   │   │   └── shopDetails.ts     # Store info
│   │   ├── context/        # State management
│   │   │   └── CartContext.tsx    # Cart logic
│   │   └── routes.tsx      # Routing config
│   └── imports/            # Your images
│       ├── RianCap.jpeg
│       ├── riaNCOLL.jpeg
│       ├── RianCool.jpeg
│       └── RianPunjabi.jpeg
├── api/
│   └── send-purchase-email.ts  # Email backend
└── *.md                    # Documentation
```

---

## 🎬 Getting Started (3 Steps)

### Step 1: Edit Products (2 minutes)
```typescript
// Open: src/app/data/shirts.ts
// Find product ID '1' and edit:
{
  name: 'Your Shirt Name',
  price: 899,
  description: 'Your description...',
  image: '/src/imports/YourImage.jpeg',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'White'],
  // ... other fields
}
```

### Step 2: Set Up Email (5 minutes)
1. Go to [emailjs.com](https://emailjs.com) → Sign up
2. Create email service → Copy Service ID
3. Create template → Copy Template ID
4. Get Public Key from account settings
5. Open `api/send-purchase-email.ts`
6. Replace: `YOUR_EMAIL`, `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`

### Step 3: Test! (1 minute)
1. Click "Buy Now" on any product
2. Fill in the form
3. Check your email inbox
4. 🎉 You got the order!

---

## 📊 Features Checklist

- ✅ 120+ products with images
- ✅ Trending, New, Sale, Top Rated sections
- ✅ Search functionality
- ✅ Product detail pages
- ✅ Size & color selection
- ✅ Buy Now direct purchase
- ✅ Shopping cart
- ✅ Checkout process
- ✅ Email order notifications (setup required)
- ✅ Price breakdown (Product + VAT + Delivery)
- ✅ Payment method selection (Online/COD)
- ✅ Responsive design (Desktop/Tablet/Mobile)
- ✅ Beautiful animations
- ✅ Admin panel with instructions
- ✅ 5 documentation files
- ✅ Shop information in footer
- ✅ Product recommendations

---

## 🎯 What Makes This Special

### 1. Direct Purchase
Most e-commerce sites require cart → checkout → payment. This site has:
- **"Buy Now"** button on every product
- **Quick modal** with minimal form
- **Instant purchase** in 3 clicks

### 2. Email Integration Ready
- Pre-built email API endpoint
- EmailJS configuration ready
- Resend alternative ready
- Complete order details in email

### 3. Beautiful Animations
- Cards appear one by one
- Smooth hover effects
- Bouncing success messages
- Professional feel

### 4. Complete Documentation
- 5 detailed guides
- Step-by-step tutorials
- Code comments
- Admin panel instructions

---

## 💡 Pro Tips

### Testing Orders
1. Press **F12** to open browser console
2. Click "Buy Now" on any product
3. Fill form and submit
4. Check console for `=== DIRECT PURCHASE ORDER ===`
5. See complete order JSON

### Viewing Saved Orders
```javascript
// In browser console (F12):
localStorage.getItem('latestPurchase')

// Or formatted:
console.log(JSON.parse(localStorage.getItem('latestPurchase')))
```

### Customizing Animations
Edit any component file and change:
```typescript
// Slower animation
transition={{ duration: 0.6 }}

// Faster animation
transition={{ duration: 0.1 }}

// Bouncy animation
transition={{ type: "spring", stiffness: 200 }}
```

---

## 🚀 Going Live

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Import to Vercel
3. Deploy (auto-deploys on push)
4. Get free HTTPS domain

### Option 2: Netlify
1. Connect GitHub repo
2. Configure build settings
3. Deploy
4. Custom domain available

### Option 3: Self-Host
1. Build: `pnpm run build`
2. Upload `dist` folder
3. Configure web server
4. Point domain

---

## ❓ FAQ

**Q: How do I receive orders?**  
A: Set up EmailJS (5 minutes) using EMAIL_SETUP_GUIDE.md. You'll get instant emails when customers order.

**Q: Can customers pay online?**  
A: The payment method selection is ready. Add Razorpay/Stripe integration for actual payment processing.

**Q: How do I add more products?**  
A: Edit `src/app/data/shirts.ts` and add new product objects. Follow the format of existing products.

**Q: How do I change prices?**  
A: Edit the `price` field in `shirts.ts`. Change `vatPercentage` and `deliveryCharge` in `shopDetails.ts`.

**Q: Can I remove animations?**  
A: Yes! See ANIMATION_FEATURES.md for customization guide.

---

## 📞 Support

- 📖 Read the documentation files
- 🔍 Check browser console (F12) for errors
- 💬 Visit Admin panel for instructions
- 📧 Test email setup with sample orders

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion Library](https://motion.dev)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [React Router](https://reactrouter.com)

---

## 🎉 You're Ready!

Your complete shirt e-commerce website is ready to go. Just:

1. ✅ Add your products and images
2. ✅ Set up email notifications
3. ✅ Customize shop details
4. ✅ Test the purchase flow
5. ✅ Deploy and start selling!

**Happy selling! 🚀👕**

---

## 📄 License

This is your project - use it however you want!

---

**Built with ❤️ for shirt sellers everywhere**
