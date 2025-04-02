"use client";

import { TbChevronDown } from "react-icons/tb";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RectangleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="p-4 md:p-6 border border-gray-200 rounded-2xl md:rounded-3xl flex flex-col gap-3 md:gap-4 cursor-pointer hover:border-primary/20 hover:shadow-md transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base md:text-lg font-bold">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.1 }}
        >
          <TbChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="text-sm md:text-base text-gray-600 leading-relaxed overflow-hidden"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RectangleCard;
