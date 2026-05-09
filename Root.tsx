import { createContext, useContext, useState, ReactNode } from 'react';
import { Shirt } from '../data/shirts';

export interface CartItem extends Shirt {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (shirt: Shirt, size: string, color: string) => void;
  removeFromCart: (shirtId: string, size: string) => void;
  updateQuantity: (shirtId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getVAT: () => number;
  getDeliveryCharge: () => number;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const VAT_PERCENTAGE = 10;
  const DELIVERY_CHARGE = 50;
  const FREE_DELIVERY_THRESHOLD = 2000;

  const addToCart = (shirt: Shirt, size: string, color: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === shirt.id && item.selectedSize === size
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shirt.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...shirt, quantity: 1, selectedSize: size, selectedColor: color }];
    });
  };

  const removeFromCart = (shirtId: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === shirtId && item.selectedSize === size))
    );
  };

  const updateQuantity = (shirtId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(shirtId, size);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === shirtId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getVAT = () => {
    return (getSubtotal() * VAT_PERCENTAGE) / 100;
  };

  const getDeliveryCharge = () => {
    const subtotal = getSubtotal();
    return subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_CHARGE;
  };

  const getTotalPrice = () => {
    return getSubtotal() + getVAT() + getDeliveryCharge();
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getSubtotal,
        getVAT,
        getDeliveryCharge,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
