"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        {
          name: "React.js",
          color: "from-blue-400 to-blue-600",
          icon: "⚛️",
          description: "Biblioteca para interfaces de usuario",
        },
        {
          name: "Next.js",
          color: "from-gray-400 to-gray-600",
          icon: "▲",
          description: "Framework de React para producción",
        },
        {
          name: "TypeScript",
          color: "from-blue-500 to-blue-700",
          icon: "📘",
          description: "JavaScript con tipado estático",
        },
        {
          name: "Tailwind CSS",
          color: "from-cyan-400 to-cyan-600",
          icon: "🎨",
          description: "Framework CSS utility-first",
        },
        {
          name: "Styled Components",
          color: "from-pink-400 to-pink-600",
          icon: "💅",
          description: "Estilos en componentes para React",
        },
        {
          name: "Bootstrap",
          color: "from-purple-400 to-purple-600",
          icon: "🅱️",
          description: "Framework CSS popular para UI",
        },
        // {
        //   name: "HTML",
        //   color: "from-orange-400 to-orange-600",
        //   icon: "🌐",
        //   description: "Lenguaje de marcado para la web",
        // },
        // {
        //   name: "CSS",
        //   color: "from-blue-300 to-blue-500",
        //   icon: "🎨",
        //   description: "Hojas de estilo para diseño web",
        // },
        // {
        //   name: "Dropzone",
        //   color: "from-purple-300 to-purple-500",
        //   icon: "📤",
        //   description: "Componente para subir archivos fácilmente",
        // },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        {
          name: "Express.js",
          color: "from-gray-400 to-gray-600",
          icon: "🚀",
          description: "Framework web para Node.js",
        },
        {
          name: "Firebase",
          color: "from-orange-400 to-orange-600",
          icon: "🔥",
          description: "Backend como servicio de Google",
        },
        {
          name: "Sequelize",
          color: "from-indigo-400 to-indigo-600",
          icon: "🗃️",
          description: "ORM para bases de datos SQL",
        },
        {
          name: "PostgreSQL",
          color: "from-blue-500 to-blue-700",
          icon: "🐘",
          description: "Base de datos relacional potente y robusta",
        },
        {
          name: "JWT",
          color: "from-yellow-400 to-yellow-600",
          icon: "🔐",
          description: "Autenticación basada en tokens",
        },
        // {
        //   name: "Parcel",
        //   color: "from-pink-400 to-pink-600",
        //   icon: "📦",
        //   description: "Empaquetador de aplicaciones web",
        // },
        {
          name: "Vite",
          color: "from-violet-400 to-violet-600",
          icon: "⚡",
          description: "Build tool ultrarrápido para proyectos web",
        },
      ],
    },
    integraciones: {
      title: "APIs & Integraciones",
      skills: [
        {
          name: "Algolia",
          color: "from-indigo-500 to-indigo-700",
          icon: "🔍",
          description: "Búsqueda instantánea en tiempo real",
        },
        {
          name: "Airtable",
          color: "from-yellow-500 to-yellow-700",
          icon: "📊",
          description: "Base de datos visual en la nube",
        },
        {
          name: "Sendinblue",
          color: "from-blue-400 to-blue-600",
          icon: "📨",
          description: "Email marketing y automatizaciones",
        },
        {
          name: "MercadoPago",
          color: "from-sky-500 to-sky-700",
          icon: "💳",
          description: "Procesamiento de pagos en LATAM",
        },
        {
          name: "Cloudinary",
          color: "from-blue-300 to-blue-500",
          icon: "☁️",
          description: "Gestión y optimización de medios",
        },
        {
          name: "Mapbox",
          color: "from-green-400 to-green-600",
          icon: "🗺️",
          description: "Mapas interactivos personalizados",
        },
      ],
    },
    herramientas: {
      title: "Herramientas",
      skills: [
        {
          name: "Recoil.js",
          color: "from-emerald-400 to-emerald-600",
          icon: "🔗",
          description: "Manejo de estado para React",
        },
        {
          name: "Framer Motion",
          color: "from-teal-400 to-teal-600",
          icon: "🎭",
          description: "Animaciones fluidas en React",
        },
        {
          name: "Git",
          color: "from-orange-400 to-orange-600",
          icon: "📝",
          description: "Control de versiones distribuido",
        },
        {
          name: "VS Code",
          color: "from-blue-500 to-blue-700",
          icon: "💻",
          description: "Editor de código extensible",
        },
        {
          name: "Vercel",
          color: "from-gray-400 to-gray-600",
          icon: "▲",
          description: "Deployment para frontend moderno",
        },
      ],
    },
  };

  return (
    <section id='skills' className='py-32 px-6 relative'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent' />

      <div className='container mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <span className='text-blue-400 font-medium tracking-wider uppercase text-sm'>
            Habilidades
          </span>
          <h2 className='text-4xl lg:text-6xl font-bold text-white mt-4 mb-6'>
            Mi Stack{" "}
            <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
              Tecnológico
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Tecnologías y herramientas que domino para crear soluciones completas y escalables
          </p>
        </motion.div>

        {/* Category Tabs - Versión Mobile Friendly */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className='mb-12 w-full px-4 sm:px-0' // Añadido padding para móviles
        >
          <div className='mx-auto max-w-max bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm'>
            <div className='flex space-x-1  flex-wrap max-md:justify-center '>
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`whitespace-nowrap px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base rounded-full font-medium transition-all duration-300 ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-6xl mx-auto'
        >
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='group relative'
                >
                  <div className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:border-blue-500/30 h-full'>
                    {/* Icon */}
                    <div className='flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 mb-4 group-hover:scale-110 transition-transform duration-300'>
                      <div className='text-3xl'>{skill.icon}</div>
                    </div>

                    {/* Skill Name */}
                    <h3 className='text-xl font-bold text-white mb-2'>{skill.name}</h3>

                    {/* Description */}
                    <p className='text-gray-400 text-sm leading-relaxed'>{skill.description}</p>

                    {/* Decorative Element */}
                    <div className='mt-4 flex space-x-1'>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-60`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl' />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto'>
            <h4 className='text-white font-bold text-xl mb-4'>Siempre Aprendiendo</h4>
            <p className='text-gray-400 leading-relaxed'>
              Mi stack tecnológico está en constante evolución. Me mantengo actualizado con las
              últimas tendencias y mejores prácticas del desarrollo web, siempre buscando nuevas
              formas de crear soluciones más eficientes y escalables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
