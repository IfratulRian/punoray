# Email Setup Guide - Receive Orders via Email

## 🎯 Quick Overview

Your website now has a **"Buy Now"** button on every product that allows customers to make direct purchases. The purchase details need to be forwarded to your email. Here's how to set it up.

---

## 📧 Option 1: EmailJS (Recommended - Easiest)

EmailJS lets you send emails directly from your website without a backend server.

### Step-by-Step Setup:

#### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up for FREE (200 emails/month)
- Verify your email

#### 2. Connect Your Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authorization steps
- Copy the **Service ID** (you'll need this)

#### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```
New Order Received!

Order Number: {{order_number}}
Customer: {{customer_name}}
Phone: {{customer_phone}}

Product: {{product_name}}
Size: {{product_size}}
Color: {{product_color}}
Quantity: {{quantity}}

Total Amount: ₹{{total_amount}}
Payment Method: {{payment_method}}

Address: {{customer_address}}

---
Order Details:
{{message}}
```

- Save and copy the **Template ID**

#### 4. Get Public Key
- Go to "Account" → "General"
- Copy your **Public Key**

#### 5. Configure Your Website

Open this file: `/workspaces/default/code/api/send-purchase-email.ts`

Find these lines and replace with your details:
```typescript
const YOUR_EMAIL = 'your-email@gmail.com'; // ⬅️ Your email address
const EMAILJS_SERVICE_ID = 'service_abc123'; // ⬅️ From step 2
const EMAILJS_TEMPLATE_ID = 'template_xyz789'; // ⬅️ From step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // ⬅️ From step 4
```

Save the file and you're done! 🎉

---

## 📧 Option 2: Resend (Alternative)

Resend is another great option for sending emails.

### Setup:

#### 1. Create Account
- Go to [resend.com](https://resend.com)
- Sign up (free tier: 100 emails/day)

#### 2. Get API Key
- Go to API Keys
- Create new API key
- Copy it

#### 3. Verify Domain (Optional)
- For production, verify your domain
- For testing, use their test email

#### 4. Configure

In `/workspaces/default/code/api/send-purchase-email.ts`, uncomment the Resend section:

```typescript
const RESEND_API_KEY = 're_123456789'; // ⬅️ Your API key
const resendResponse = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    from: 'ShirtHub <orders@yourdomain.com>',
    to: ['your-email@example.com'],
    subject: `New Order: ${purchaseDetails.orderNumber}`,
    html: `<pre>${emailBody}</pre>`,
  }),
});
```

---

## 📧 Option 3: Supabase + Email Integration

If you want a database AND emails:

### Setup:

#### 1. Create Supabase Project
- Go to [supabase.com](https://supabase.com)
- Create new project (FREE)

#### 2. Install Supabase
```bash
pnpm add @supabase/supabase-js
```

#### 3. Create Orders Table
In Supabase SQL Editor:
```sql
CREATE TABLE purchases (
  id SERIAL PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  payment_method TEXT NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_size TEXT NOT NULL,
  product_color TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  vat DECIMAL(10,2) NOT NULL,
  delivery_charge DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. Set Up Email Trigger
Create a Supabase Edge Function to send emails when new orders arrive.

---

## 📱 Bonus: WhatsApp Notifications

Want to receive orders via WhatsApp too?

### Quick Method (No API):

Add this to your Purchase Modal success screen:

```typescript
const whatsappMessage = `
New Order: ${orderNumber}
Customer: ${formData.name}
Phone: ${formData.phone}
Product: ${shirt.name}
Size: ${selectedSize}
Total: ₹${total}
`;

const whatsappLink = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;
```

Customers can click to notify you via WhatsApp!

---

## 🧪 Testing Your Setup

### 1. Test Locally
- Open your website
- Click "Buy Now" on any product
- Fill in the form
- Click "Confirm Purchase"
- Check your email inbox!

### 2. Check Browser Console
- Press F12
- Look for any error messages
- Order details are logged even if email fails

### 3. Check EmailJS Dashboard
- Go to EmailJS dashboard
- Check "Email History"
- See if emails were sent

---

## 🎯 What Happens When Customer Places Order

1. **Customer** clicks "Buy Now"
2. **Form appears** asking for: Name, Phone, Address, Payment Method
3. **Customer** fills form and confirms
4. **Order is saved** to localStorage (backup)
5. **Email is sent** to you with all details
6. **Customer** sees success message with order number
7. **You receive email** with:
   - Order number
   - Customer details
   - Product details
   - Payment method
   - Total amount

---

## 📊 Order Format You'll Receive

```
NEW ORDER RECEIVED!

Order Number: ORD-1746420123456
Date: May 9, 2026, 10:30 AM

CUSTOMER DETAILS:
Name: John Doe
Phone: +1 555-123-4567
Address: 123 Main St, New York, NY 10001
Payment Method: Cash on Delivery

PRODUCT DETAILS:
Product: Rian Cap Style Polo Shirt
Size: L
Color: Olive Green
Quantity: 2
Price per item: ₹899

PRICING:
Subtotal: ₹1798.00
VAT (10%): ₹179.80
Delivery Charge: ₹50.00
TOTAL: ₹2027.80
```

---

## 🚀 Going Live

### Before Launch:
1. ✅ Set up EmailJS account
2. ✅ Configure email template
3. ✅ Update configuration in `send-purchase-email.ts`
4. ✅ Test with a real order
5. ✅ Verify you receive emails
6. ✅ Set up auto-reply to customers (optional)

### After Launch:
- Check emails regularly
- Respond to customers within 24 hours
- Keep backup of orders (they're in localStorage too)
- Monitor EmailJS quota (200 emails/month free)

---

## ❓ Troubleshooting

### Not Receiving Emails?

1. **Check spam folder**
2. **Verify EmailJS configuration** (Service ID, Template ID, Public Key)
3. **Check browser console** (F12) for error messages
4. **Verify EmailJS email quota** (not exceeded 200/month)
5. **Check EmailJS dashboard** for failed emails

### Emails Going to Spam?

1. Verify your domain in EmailJS
2. Use a professional email address
3. Set up SPF and DKIM records

### Need More Emails?

- Upgrade EmailJS plan ($15/month for 1000 emails)
- Or switch to Resend (100 emails/day free)

---

## 💡 Pro Tips

1. **Set up email filters** to organize orders
2. **Create auto-reply** to acknowledge orders
3. **Use email templates** for order confirmations
4. **Set up SMS notifications** for critical orders
5. **Keep backup** of all orders in spreadsheet

---

## 📞 Need Help?

- EmailJS Docs: [docs.emailjs.com](https://www.emailjs.com/docs/)
- Resend Docs: [resend.com/docs](https://resend.com/docs)
- Check browser console for errors (F12)
- Test with small orders first

---

**Congratulations! Your customers can now make direct purchases and you'll receive instant email notifications! 📧🎉**
