"use client";

import { motion } from "framer-motion";
import { Code, Zap, Users, Award } from "lucide-react";

export function AboutSection() {
  const stats = [
    { icon: Code, label: "Proyectos", value: "10+" },
    { icon: Zap, label: "Tecnologías", value: "15+" },
    { icon: Users, label: "Clientes", value: "5+" },
    { icon: Award, label: "Años", value: "2+" },
  ];

  return (
    <section id='about' className='py-32 px-6 relative'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='space-y-4'>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className='text-blue-400 font-medium tracking-wider uppercase text-sm'
              >
                Sobre mí
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className='text-4xl lg:text-6xl font-bold text-white leading-tight'
              >
                Transformando ideas en{" "}
                <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
                  realidad digital
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className='space-y-6 text-gray-400 text-lg leading-relaxed'
            >
              <p>
                Soy un desarrollador fullstack apasionado por crear soluciones innovadoras que
                marquen la diferencia. Mi enfoque se centra en escribir código limpio, escalable y
                mantener las mejores prácticas de desarrollo.
              </p>
              <p>
                Durante mi trayectoria, he trabajado con diversas tecnologías modernas, desde React
                y Next.js en el frontend hasta Node.js y PostgreSQL en el backend, siempre buscando
                la excelencia en cada proyecto.
              </p>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-wrap gap-3'
            >
              {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Firebase"].map(
                (skill, index) => (
                  <span
                    key={skill}
                    className='px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors'
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='grid grid-cols-2 gap-8'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className='relative group'
              >
                <div className='bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group-hover:border-blue-500/30'>
                  <div className='flex items-center justify-between mb-4'>
                    <stat.icon className='w-8 h-8 text-blue-400' />
                    <div className='w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity' />
                  </div>
                  <div className='text-3xl font-bold text-white mb-2'>{stat.value}</div>
                  <div className='text-gray-400 text-sm'>{stat.label}</div>
                </div>

                {/* Hover Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl' />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
