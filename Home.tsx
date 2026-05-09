import { useState } from 'react';
import { Link } from 'react-router';
import { Shirt } from '../data/shirts';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Eye, ShoppingBag } from 'lucide-react';
import { PurchaseModal } from './PurchaseModal';
import { motion } from 'motion/react';

interface ShirtCardProps {
  shirt: Shirt;
}

export function ShirtCard({ shirt }: ShirtCardProps) {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const discountPercentage = shirt.originalPrice
    ? Math.round(((shirt.originalPrice - shirt.price) / shirt.originalPrice) * 100)
    : 0;

  const handleBuyNow = () => {
    setSelectedSize(shirt.sizes[0] || '');
    setSelectedColor(shirt.colors[0] || '');
    setShowPurchaseModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <Card className="overflow-hidden transition-all hover:shadow-lg group">
          <Link to={`/product/${shirt.id}`}>
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <motion.img
                src={shirt.image}
                alt={shirt.name}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {shirt.isNew && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="absolute top-2 left-2 bg-green-500">
                    New
                  </Badge>
                </motion.div>
              )}
              {shirt.isOnSale && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="absolute top-2 right-2 bg-red-500">
                    {discountPercentage}% OFF
                  </Badge>
                </motion.div>
              )}
              {!shirt.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>
          </Link>
          <CardContent className="p-3">
            <Link to={`/product/${shirt.id}`}>
              <h3 className="font-semibold text-sm mb-1 hover:underline line-clamp-1">
                {shirt.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mb-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{shirt.rating}</span>
              <span className="text-xs text-gray-500">({shirt.reviews})</span>
              <Eye className="h-3 w-3 text-gray-400 ml-2" />
              <span className="text-xs text-gray-500">{shirt.views}</span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-xs text-gray-600">Sizes:</span>
              <span className="text-xs text-gray-500">{shirt.sizes.join(', ')}</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2 p-3 pt-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="text-lg font-bold">₹{shirt.price}</span>
                {shirt.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">
                    ₹{shirt.originalPrice}
                  </span>
                )}
              </div>
              {shirt.isTrending && (
                <Badge variant="outline" className="text-xs">
                  🔥 Trending
                </Badge>
              )}
            </div>
            <Button
              className="w-full gap-2"
              size="sm"
              onClick={handleBuyNow}
              disabled={!shirt.inStock}
            >
              <ShoppingBag className="h-4 w-4" />
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <PurchaseModal
        shirt={shirt}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={1}
        open={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
      />
    </>
  );
}
