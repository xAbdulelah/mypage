"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const AToast = (message: string, btnMessage?: string, onClick?: () => void) => {
  toast(message, {
    icon: <ShoppingCart color="#068fd4" size={19} />,
    style: {
      borderRadius: "15px",
      borderColor: "#b0d6f5",
      fontSize: "15px",
      borderWidth: "1px",
    },
    
    action: (
     onClick?  (<motion.button
        whileHover={{
          scale: 1.30,
        }}
        whileTap={{ scale: 0.55 }}
        onClick={onClick}
        
        className="relative flex items-center justify-center px-4 py-2 rounded-3xl text-white text-sm bg-gradient-to-r from-cyan-500 to-violet-500 bg-[length:100%_100%] whitespace-nowrap"

      >
        {btnMessage}
      </motion.button>) : (<></>)
    ),
  });
};

export default AToast;
