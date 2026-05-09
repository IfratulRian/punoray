import { shopDetails } from '../data/shopDetails';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Separator } from './ui/separator';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{shopDetails.name}</h3>
            <p className="text-sm mb-4">{shopDetails.description}</p>
            <div className="flex gap-3">
              <motion.a
                href={shopDetails.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={shopDetails.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={shopDetails.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>{shopDetails.contact.phone}</p>
                  <p className="text-xs text-gray-400">WhatsApp: {shopDetails.contact.whatsapp}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>{shopDetails.contact.email}</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>{shopDetails.address.street}</p>
                  <p>
                    {shopDetails.address.city}, {shopDetails.address.state} {shopDetails.address.zip}
                  </p>
                  <p>{shopDetails.address.country}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Weekdays</p>
                  <p>{shopDetails.businessHours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Weekends</p>
                  <p>{shopDetails.businessHours.weekends}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Customer Care</h3>
            <div className="space-y-2 text-sm">
              <p>✓ {shopDetails.policies.returns}</p>
              <p>✓ {shopDetails.policies.exchange}</p>
              <p>✓ {shopDetails.policies.warranty}</p>
              <p>✓ Cash on Delivery Available</p>
              <p>✓ Secure Online Payment</p>
              <p>✓ Free Delivery Above ₹{shopDetails.shipping.freeDeliveryAbove}</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm">
          <p>&copy; 2026 {shopDetails.name}. All rights reserved.</p>
          <p className="text-gray-400 mt-1">
            Made with ❤️ for shirt lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
