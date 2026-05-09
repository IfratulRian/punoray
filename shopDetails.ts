import { Link } from 'react-router';
import { ShoppingCart, Store, Settings } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

export function Header() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white shadow-sm"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Store className="h-6 w-6" />
          </motion.div>
          <div>
            <span className="text-xl font-bold">ShirtHub</span>
            <p className="text-xs text-gray-600">Premium Shirts</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Admin</span>
            </Button>
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" size="sm" className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <Badge variant="destructive" className="ml-1">
                    {totalItems}
                  </Badge>
                </motion.div>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
