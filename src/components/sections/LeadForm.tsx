"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  category: string;
  message: string;
};

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const budgetValue = watch("budget");
  const categoryValue = watch("category");

  const BUDGET_OPTIONS = [
    "50 Lacs and below",
    "50 Lacs to 1 Crore",
    "1 Crore to 1.5 Crore",
    "1.5 Crore to 2 Crore",
    "2 Crore and above"
  ];

  const CATEGORY_OPTIONS = [
    "Residential",
    "Commercial"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FBFBFB] p-6 md:p-8 rounded-2xl">
      <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
        <h3 className="font-serif text-xl text-black/80 font-medium">Enquire Now</h3>
      </div>
      
      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in duration-500">
          <CheckCircle2 className="w-12 h-12 text-[var(--color-brand-gold)] mb-4" />
          <h4 className="font-serif text-xl text-black mb-2">Thank You</h4>
          <p className="text-black/60 text-sm font-light">
            We'll reach out to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-[9px] tracking-widest font-bold text-black/40 uppercase">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full bg-[#F5F5F5] border-none rounded-lg py-3 px-4 text-sm text-black placeholder-black/30 focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-all outline-none`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-[9px] mt-1 uppercase font-bold tracking-wider">{errors.name.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] tracking-widest font-bold text-black/40 uppercase">Phone Number</label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-[#F5F5F5] px-3 py-3 rounded-lg border-none min-w-[85px]">
                <div className="relative w-5 h-4">
                  <Image 
                    src="https://flagcdn.com/w20/in.webp" 
                    alt="India" 
                    fill
                    className="object-contain rounded-sm"
                  />
                </div>
                <span className="text-black/60 text-xs font-medium">+91</span>
                <span className="text-black/20 text-[10px]">▼</span>
              </div>
              <input
                type="tel"
                placeholder="XXXXX XXXXX"
                className={`flex-1 bg-[#F5F5F5] border-none rounded-lg py-3 px-4 text-sm text-black placeholder-black/30 focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-all outline-none`}
                {...register("phone", { 
                  required: "Phone is required",
                  pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" }
                })}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-[9px] mt-1 uppercase font-bold tracking-wider">{errors.phone.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] tracking-widest font-bold text-black/40 uppercase">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-[#F5F5F5] border-none rounded-lg py-3 px-4 text-sm text-black placeholder-black/30 focus:ring-1 focus:ring-[var(--color-brand-gold)] transition-all outline-none"
              {...register("email")}
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="block text-[9px] tracking-widest font-bold text-black/40 uppercase">Budget</label>
            <div 
              onClick={() => {
                setBudgetOpen(!budgetOpen);
                setCategoryOpen(false);
              }}
              className={`w-full bg-[#F5F5F5] border ${budgetOpen ? 'border-[var(--color-brand-gold)]' : 'border-transparent'} rounded-lg py-3 px-4 text-sm cursor-pointer flex justify-between items-center transition-all`}
            >
              <span className={budgetValue ? "text-black" : "text-black/30"}>
                {budgetValue || "Select Budget *"}
              </span>
              <span className={`text-[10px] transition-transform duration-300 ${budgetOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            
            <AnimatePresence>
              {budgetOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 left-0 right-0 top-[100%] mt-1 bg-white border border-black/10 rounded-lg shadow-xl overflow-hidden"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <div 
                      key={option}
                      onClick={() => {
                        setValue("budget", option);
                        setBudgetOpen(false);
                      }}
                      className="px-4 py-2.5 text-[12px] text-black/70 hover:bg-[#D4AF37] hover:text-black cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <input type="hidden" {...register("budget", { required: true })} />
          </div>

          <div className="space-y-1.5 relative">
            <label className="block text-[9px] tracking-widest font-bold text-black/40 uppercase">Interested In</label>
            <div 
              onClick={() => {
                setCategoryOpen(!categoryOpen);
                setBudgetOpen(false);
              }}
              className={`w-full bg-[#F5F5F5] border ${categoryOpen ? 'border-[var(--color-brand-gold)]' : 'border-transparent'} rounded-lg py-3 px-4 text-sm cursor-pointer flex justify-between items-center transition-all`}
            >
              <span className={categoryValue ? "text-black" : "text-black/30"}>
                {categoryValue || "Select Category *"}
              </span>
              <span className={`text-[10px] transition-transform duration-300 ${categoryOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            
            <AnimatePresence>
              {categoryOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 left-0 right-0 top-[100%] mt-1 bg-white border border-black/10 rounded-lg shadow-xl overflow-hidden"
                >
                  {CATEGORY_OPTIONS.map((option) => (
                    <div 
                      key={option}
                      onClick={() => {
                        setValue("category", option);
                        setCategoryOpen(false);
                      }}
                      className="px-4 py-2.5 text-[12px] text-black/70 hover:bg-[#D4AF37] hover:text-black cursor-pointer transition-colors"
                    >
                      {option}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <input type="hidden" {...register("category", { required: true })} />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-[10px] tracking-[0.2em] py-4 rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 uppercase mt-2"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      )}
    </div>
  );
}
