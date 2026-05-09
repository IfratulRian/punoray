// API Route for sending purchase emails
// This is a serverless function that will send order details to your email

export const config = {
  runtime: 'nodejs', // IMPORTANT FIX (edge often breaks EmailJS requests)
};

interface PurchaseDetails {
  orderNumber: string;
  date: string;
  customer: {
    name: string;
    phone: string;
    address: string;
    paymentMethod: string;
  };
  product: {
    id: string;
    name: string;
    size: string;
    color: string;
    quantity: number;
    price: number;
    image: string;
  };
  pricing: {
    subtotal: number;
    vat: number;
    deliveryCharge: number;
    total: number;
  };
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const purchaseDetails: PurchaseDetails = await req.json();

    // EMAIL CONFIGURATION
    const YOUR_EMAIL = 'ifrat.rian0007@gmail.com';
    const EMAILJS_SERVICE_ID = 'service_d4kzdeh';
    const EMAILJS_TEMPLATE_ID = 'template_e8mzb5p';
    const EMAILJS_PUBLIC_KEY = 'k03KeeAaxWJABY3Mk';

    console.log("📦 Order received:", purchaseDetails);

    const emailJSResponse = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,

          template_params: {
            to_email: YOUR_EMAIL,

            order_number: purchaseDetails.orderNumber,
            date: new Date(purchaseDetails.date).toLocaleString(),

            customer_name: purchaseDetails.customer.name,
            customer_phone: purchaseDetails.customer.phone,
            customer_address: purchaseDetails.customer.address,

            payment_method:
              purchaseDetails.customer.paymentMethod === 'offline'
                ? 'Cash on Delivery'
                : 'Online Payment',

            product_name: purchaseDetails.product.name,
            product_size: purchaseDetails.product.size,
            product_color: purchaseDetails.product.color,
            quantity: purchaseDetails.product.quantity,

            total_amount: purchaseDetails.pricing.total.toFixed(2),

            message: `Order ${purchaseDetails.orderNumber} - ${purchaseDetails.product.name}`,
          },
        }),
      }
    );

    const responseText = await emailJSResponse.text();

    console.log("📨 EmailJS response:", responseText);

    if (!emailJSResponse.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: responseText,
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('❌ Email send error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}