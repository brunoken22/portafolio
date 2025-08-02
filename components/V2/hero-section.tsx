"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function HeroSection() {
  const { push } = useRouter();
  return (
    <section className='relative min-h-screen flex items-center justify-center px-6 pt-20'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className='absolute top-1/4 left-1/4 w-96 h-96 border border-blue-500/20 rounded-full'
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className='absolute bottom-1/4 right-1/4 w-64 h-64 border border-teal-500/20 rounded-full'
        />
      </div>

      <div className='container mx-auto relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='space-y-8'
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 rounded-full px-6 py-3'
            >
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
              <span className='text-sm text-gray-300'>Disponible para proyectos</span>
            </motion.div>

            {/* Main Title */}
            <div className='space-y-4'>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-6xl lg:text-8xl font-black leading-none'
              >
                <span className='block text-white'>BRUNO</span>
                <span className='block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent'>
                  KEN
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='flex items-center space-x-4'
              >
                <div className='h-px bg-gradient-to-r from-blue-400 to-transparent w-16' />
                <span className='text-xl text-gray-400 font-light tracking-wider'>
                  SOFTWARE DEVELOPER
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='text-lg text-gray-400 leading-relaxed max-w-xl'
            >
              Especializado en desarrollo fullstack con{" "}
              <span className='text-blue-400 font-medium'>React</span>,{" "}
              <span className='text-cyan-400 font-medium'>Next.js</span> y{" "}
              <span className='text-teal-400 font-medium'>Node.js</span>. Creando experiencias
              digitales excepcionales con código limpio y diseño innovador.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex items-center space-x-4'
            >
              {[
                { icon: Github, href: "https://github.com/brunoken22", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/brunoken18/",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "mailto:bruno_am_22@hotmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group'
                >
                  <social.icon className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors' />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='flex flex-col sm:flex-row gap-4 justify-start items-center'
            >
              <Link
                target='_blank'
                href={
                  "https://docs.google.com/document/d/1IdMDFny9UDoP8r88W9z6GBvsZXzhmhKl/edit?usp=sharing&ouid=117376640221651395420&rtpof=true&sd=true"
                }
                className='flex bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group'
              >
                <Download className='mr-2 h-5 w-5 group-hover:animate-bounce' />
                Ver CV
              </Link>
              <Button
                variant='outline'
                size='lg'
                onClick={() => push("/#projects", { scroll: true })}
                className='px-8 py-4 rounded-full font-medium border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm'
              >
                Ver Proyectos
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='relative flex justify-center lg:justify-end'
          >
            <div className='relative'>
              {/* Glowing Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 p-1'
              >
                <div className='w-full h-full rounded-full bg-black' />
              </motion.div>

              {/* Profile Image */}
              <div className='relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 to-teal-500 p-1'>
                <div className='w-full h-full rounded-full overflow-hidden bg-black'>
                  <Image
                    src='/hero.webp'
                    alt='Bruno Ken'
                    width={320}
                    height={320}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm'
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-sm'
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className='flex flex-col items-center space-y-2 cursor-pointer'
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className='text-xs text-gray-500 uppercase tracking-wider'>Bajar</span>
            <div className='w-px h-8 bg-gradient-to-b from-blue-400 to-transparent' />
            <ArrowDown className='w-4 h-4 text-gray-500' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
