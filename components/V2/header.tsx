"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Bk from "@/ui/icons/logoByMe.svg";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/#inicio'
            aria-label='logo'
            className='z-10 relative bg-white rounded-full h-[60px] w-[60px]'
          >
            <Bk className={`w-full h-full ml-[0.7rem]  text-white `} />
          </Link>
          <div className='absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity' />

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='relative text-gray-300 hover:text-white transition-colors group'
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300' />
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className='flex items-center space-x-4'>
            {/* <Button
              variant='ghost'
              size='icon'
              onClick={handleCambiar}
              className='z-10 cursor-pointer rounded-full bg-white/5 hover:bg-white/10 border border-white/10'
            >
              <Sun className='z-10 cursor-pointer h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='z-10  cursor-pointer absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            </Button> */}

            <Button
              variant='ghost'
              size='icon'
              aria-label='Menú de navegación'
              onClick={() => setIsOpen(!isOpen)}
              className='z-10 md:hidden rounded-full bg-white/5 hover:bg-white/10 border border-white/10'
            >
              {isOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className='md:hidden mt-4 overflow-hidden'
            >
              <div className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4'>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className='block py-3 text-gray-300 hover:text-white transition-colors'
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
