import { useState } from 'react';
import { Shirt } from '../data/shirts';
import { shopDetails } from '../data/shopDetails';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { CreditCard, Wallet, CheckCircle, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';

interface PurchaseModalProps {
  shirt: Shirt;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  open: boolean;
  onClose: () => void;
}

export function PurchaseModal({
  shirt,
  selectedSize,
  selectedColor,
  quantity,
  open,
  onClose,
}: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'offline',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = shirt.price * quantity;
  const vat = (subtotal * shopDetails.shipping.vatPercentage) / 100;
  const deliveryCharge =
    subtotal >= shopDetails.shipping.freeDeliveryAbove
      ? 0
      : shopDetails.shipping.deliveryCharge;
  const total = subtotal + vat + deliveryCharge;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    setIsSubmitting(true);

    const newOrderNumber = `ORD-${Date.now()}`;
    const purchaseDetails = {
      orderNumber: newOrderNumber,
      date: new Date().toISOString(),
      customer: formData,
      product: {
        id: shirt.id,
        name: shirt.name,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity,
        price: shirt.price,
        image: shirt.image,
      },
      pricing: {
        subtotal,
        vat,
        deliveryCharge,
        total,
      },
    };

    console.log('=== DIRECT PURCHASE ORDER ===');
    console.log(JSON.stringify(purchaseDetails, null, 2));
    console.log('============================');

    try {
      // Send email via backend API
      const response = await fetch('/api/send-purchase-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseDetails),
      });

      if (response.ok) {
        toast.success('Order placed successfully!');
        setOrderNumber(newOrderNumber);
        setPurchaseComplete(true);
        localStorage.setItem('latestPurchase', JSON.stringify(purchaseDetails));
      } else {
        // Fallback: save locally and show success
        toast.success('Order placed! We will contact you soon.');
        setOrderNumber(newOrderNumber);
        setPurchaseComplete(true);
        localStorage.setItem('latestPurchase', JSON.stringify(purchaseDetails));
      }
    } catch (error) {
      // Fallback: save locally and show success
      console.error('Email send error:', error);
      toast.success('Order placed! Check console for details.');
      setOrderNumber(newOrderNumber);
      setPurchaseComplete(true);
      localStorage.setItem('latestPurchase', JSON.stringify(purchaseDetails));
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '', address: '', paymentMethod: 'offline' });
    setPurchaseComplete(false);
    setOrderNumber('');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <AnimatePresence mode="wait">
          {!purchaseComplete ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  <ShoppingBag className="h-6 w-6" />
                  Quick Purchase
                </DialogTitle>
                <DialogDescription>
                  Complete your purchase in just a few steps
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex gap-4">
                    <img
                      src={shirt.image}
                      alt={shirt.name}
                      className="w-20 h-24 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{shirt.name}</h3>
                      <p className="text-sm text-gray-600">
                        Size: {selectedSize} | Color: {selectedColor}
                      </p>
                      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
                      <p className="text-lg font-bold mt-1">₹{shirt.price}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House number, street name, city, state, zip code"
                      required
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Payment Method *</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) =>
                        setFormData({ ...formData, paymentMethod: value })
                      }
                    >
                      <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="offline" id="offline" />
                        <Label
                          htmlFor="offline"
                          className="flex items-center gap-2 cursor-pointer flex-1"
                        >
                          <Wallet className="h-5 w-5" />
                          <div>
                            <p className="font-semibold">Cash on Delivery</p>
                            <p className="text-sm text-gray-600">
                              Pay when you receive
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <RadioGroupItem value="online" id="online" />
                        <Label
                          htmlFor="online"
                          className="flex items-center gap-2 cursor-pointer flex-1"
                        >
                          <CreditCard className="h-5 w-5" />
                          <div>
                            <p className="font-semibold">Online Payment</p>
                            <p className="text-sm text-gray-600">
                              Pay now with card/UPI
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VAT (10%)</span>
                      <span>₹{vat.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Charge</span>
                      <span className={deliveryCharge === 0 ? 'text-green-600' : ''}>
                        {deliveryCharge === 0
                          ? 'FREE'
                          : `₹${deliveryCharge.toFixed(2)}`}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Purchase'}
                  </Button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. We will contact you shortly to confirm
                your order.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <p className="text-sm">
                  <strong>Order Number:</strong> {orderNumber}
                </p>
                <p className="text-sm">
                  <strong>Product:</strong> {shirt.name}
                </p>
                <p className="text-sm">
                  <strong>Total Amount:</strong> ₹{total.toFixed(2)}
                </p>
              </div>
              <Button onClick={handleClose} size="lg">
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
