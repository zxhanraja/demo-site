"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { LeadForm } from "@/components/sections/LeadForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md max-h-[95vh] overflow-y-auto hide-scrollbar bg-white rounded-[1.5rem] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 text-black/40 hover:text-black transition-colors bg-[#F5F0E8] w-10 h-10 flex items-center justify-center rounded-full"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <LeadForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
