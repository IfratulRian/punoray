# How You Will Receive Order Details

## 📋 Order Information Format

When a customer places an order, here's exactly what information you'll receive:

### Order Structure

```json
{
  "orderNumber": "ORD-1746420123456",
  "date": "2026-05-05T10:30:00.000Z",
  
  "customer": {
    "name": "John Doe",
    "phone": "+1 (555) 123-4567",
    "email": "john@example.com",
    "address": "123 Main Street, Apartment 4B",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "paymentMethod": "cod"
  },
  
  "items": [
    {
      "id": "1",
      "name": "Rian Cap Style Polo Shirt",
      "size": "L",
      "color": "Olive Green",
      "quantity": 2,
      "price": 899,
      "total": 1798
    },
    {
      "id": "3",
      "name": "Rian Cool Casual Shirt",
      "size": "M",
      "color": "White",
      "quantity": 1,
      "price": 799,
      "total": 799
    }
  ],
  
  "pricing": {
    "subtotal": 2597,
    "vat": 259.7,
    "deliveryCharge": 50,
    "total": 2906.7
  }
}
```

---

## 🖥️ How to Access Orders Now (Development)

### Method 1: Browser Console

1. Open your website
2. Press `F12` to open Developer Tools
3. Go to "Console" tab
4. When someone places an order, you'll see:
   ```
   === NEW ORDER RECEIVED ===
   {full order details in JSON format}
   ========================
   ```

### Method 2: localStorage

In the browser console, type:
```javascript
// Get latest order
localStorage.getItem('latestOrder')

// View in readable format
console.log(JSON.parse(localStorage.getItem('latestOrder')))
```

---

## 📧 Setting Up Email Notifications

### Using EmailJS (Easiest - No Backend Required)

1. Sign up at [emailjs.com](https://www.emailjs.com) (Free)
2. Create an email service
3. Create an email template
4. Install EmailJS:
   ```bash
   pnpm add @emailjs/browser
   ```

5. Update the checkout page:
   ```typescript
   import emailjs from '@emailjs/browser';

   // In handleSubmit function, add:
   emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     {
       order_number: orderDetails.orderNumber,
       customer_name: formData.name,
       customer_phone: formData.phone,
       customer_email: formData.email,
       customer_address: formData.address,
       items: JSON.stringify(orderDetails.items),
       total: orderDetails.pricing.total,
       payment_method: formData.paymentMethod
     },
     'YOUR_PUBLIC_KEY'
   ).then(() => {
     console.log('Email sent!');
   });
   ```

---

## 💬 Setting Up WhatsApp Notifications

### Using WhatsApp Business API

1. Sign up for [Twilio](https://www.twilio.com/whatsapp) or [MessageBird](https://messagebird.com)
2. Get WhatsApp Business API access
3. Create a serverless function (Vercel/Netlify)
4. Send WhatsApp message on order placement

### Quick Alternative: WhatsApp Link (No API needed)

Add this to your checkout success page:
```typescript
const whatsappMessage = `
New Order: ${orderNumber}
Customer: ${formData.name}
Phone: ${formData.phone}
Total: ₹${total}
Payment: ${formData.paymentMethod}
`;

const whatsappLink = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;

// Customer clicks to notify you via WhatsApp
<a href={whatsappLink}>Notify Shop Owner</a>
```

---

## 💾 Setting Up Database (Long-term Solution)

### Option 1: Supabase (Recommended)

**Create Table:**
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  customer_address TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_state TEXT,
  customer_zip TEXT,
  payment_method TEXT NOT NULL,
  items JSONB NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  vat DECIMAL(10,2) NOT NULL,
  delivery_charge DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  order_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Insert Order:**
```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_URL', 'YOUR_KEY');

await supabase.from('orders').insert({
  order_number: orderDetails.orderNumber,
  customer_name: formData.name,
  customer_phone: formData.phone,
  customer_email: formData.email,
  customer_address: formData.address,
  customer_city: formData.city,
  customer_state: formData.state,
  customer_zip: formData.zip,
  payment_method: formData.paymentMethod,
  items: orderDetails.items,
  subtotal: orderDetails.pricing.subtotal,
  vat: orderDetails.pricing.vat,
  delivery_charge: orderDetails.pricing.deliveryCharge,
  total: orderDetails.pricing.total
});
```

---

## 📱 SMS Notifications

### Using Twilio

```typescript
import twilio from 'twilio';

const client = twilio('ACCOUNT_SID', 'AUTH_TOKEN');

await client.messages.create({
  body: `New Order ${orderNumber} from ${formData.name}. Total: ₹${total}. Payment: ${formData.paymentMethod}`,
  from: '+1234567890',
  to: 'YOUR_PHONE_NUMBER'
});
```

---

## 🔔 Push Notifications

### Using Firebase Cloud Messaging

1. Set up Firebase project
2. Install FCM
3. Send notification on new order:
   ```typescript
   import { messaging } from './firebase';

   messaging.send({
     notification: {
       title: 'New Order!',
       body: `Order ${orderNumber} - ₹${total}`
     },
     token: 'YOUR_DEVICE_TOKEN'
   });
   ```

---

## 📊 Order Management Dashboard

Create an admin dashboard to view all orders:

```typescript
// src/app/pages/OrderManagement.tsx
export function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch from Supabase/Firebase
    fetchOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h1>Order Management</h1>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
```

---

## 🎯 Recommended Setup for Beginners

1. **Start with EmailJS** (easiest, no backend)
   - Get instant email notifications
   - Free tier: 200 emails/month

2. **Add Supabase** (within a week)
   - Store orders in database
   - Set up email triggers
   - Free tier: unlimited requests

3. **Add WhatsApp** (optional)
   - Set up later for customer communication

4. **Add Payment Gateway** (when ready to accept online payments)
   - Razorpay (India)
   - Stripe (International)
   - PayPal

---

## 📞 Need Help Setting Up?

1. Visit the **Admin Panel** on your website
2. Check the **Console** after test orders
3. Read the **HOW_TO_USE.md** file
4. Follow backend setup guides for your chosen platform

---

**Remember**: Currently, all orders are logged to the console and saved in localStorage. This is perfect for testing! When you're ready to go live, implement one of the solutions above.
