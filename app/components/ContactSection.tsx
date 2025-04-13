"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    console.log("Form submitted:", formData); // Keep console log for debugging maybe? Or remove. Let's keep for now.
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-zinc-900 py-10"
    >
      <div className="bg-grid-white/[0.02] absolute inset-0 bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container relative z-10 mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-10 text-center text-5xl font-bold text-zinc-200"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-md rounded-lg border border-white/10 bg-black/50 p-8 shadow-2xl backdrop-blur-lg"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="border-zinc-700 bg-white/5 text-zinc-200 placeholder-zinc-500"
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="border-zinc-700 bg-white/5 text-zinc-200 placeholder-zinc-500"
              />
            </div>
            <div className="mb-4">
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border-zinc-700 bg-white/5 text-zinc-200 placeholder-zinc-500"
              />
            </div>
            <Button
              type="submit"
              className="group relative w-full overflow-hidden bg-white text-black transition-colors hover:bg-zinc-200"
              disabled={isSubmitting || isSubmitted}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2" size={18} />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </span>
              <span className="absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r from-zinc-200 to-white transition-transform group-hover:scale-x-100" />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
