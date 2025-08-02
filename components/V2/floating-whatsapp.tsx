"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='fixed bottom-6 right-6 z-50'
    >
      <Button
        size='lg'
        className='w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 p-0'
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send?phone=+541161204047&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20",
            "_blank"
          )
        }
      >
        <MessageCircle className='h-6 w-6' />
      </Button>
    </motion.div>
  );
}
