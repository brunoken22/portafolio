"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "TypeScript", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
        { name: "Framer Motion", level: 85, color: "from-teal-400 to-teal-600" },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 88, color: "from-gray-400 to-gray-600" },
        { name: "PostgreSQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Firebase", level: 82, color: "from-orange-400 to-orange-600" },
        { name: "GraphQL", level: 78, color: "from-cyan-400 to-cyan-600" },
      ],
    },
    tools: {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 75, color: "from-yellow-400 to-yellow-600" },
        { name: "Figma", level: 85, color: "from-indigo-400 to-indigo-600" },
        { name: "VS Code", level: 98, color: "from-blue-500 to-blue-700" },
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className='flex justify-center mb-16'
        >
          <div className='bg-white/5 border border-white/10 rounded-full p-2 backdrop-blur-sm'>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='max-w-4xl mx-auto'
        >
          <div className='grid gap-6'>
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
              (skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='group'
                >
                  <div className='flex items-center justify-between mb-3'>
                    <span className='text-white font-medium text-lg'>{skill.name}</span>
                    <span className='text-gray-400 text-sm'>{skill.level}%</span>
                  </div>

                  <div className='relative h-3 bg-white/5 rounded-full overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className='absolute inset-0 bg-white/20 animate-pulse' />
                    </motion.div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
