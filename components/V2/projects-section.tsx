"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface Technologies {
  svg: string;
  title: string;
}

interface Project {
  fields: {
    appMisPelis: string;
    linkImgPagina: string;
    linkDeArticle: string;
    github: string;
    id: number;
    technologiess?: Technologies[];
    description?: string;
  };
}

export function ProjectsSection({ proyect }: { proyect: Project[] }) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  return (
    <section id='projects' className='py-32 px-6 relative'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <span className='text-blue-400 font-medium tracking-wider uppercase text-sm'>
            Portfolio
          </span>
          <h2 className='text-4xl lg:text-6xl font-bold text-white mt-4 mb-6'>
            Proyectos{" "}
            <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
              Destacados
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Una selección de mis trabajos más recientes y desafiantes
          </p>
        </motion.div>

        <div className='space-y-32'>
          {proyect.map((project, index) => (
            <motion.div
              key={project.fields.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.fields.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-white/10'>
                  <Image
                    src={project.fields.linkImgPagina || "/placeholder.svg"}
                    alt={project.fields.appMisPelis}
                    title={project.fields.appMisPelis}
                    width={600}
                    height={400}
                    className='w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-6 left-6 right-6'>
                      <div className='flex space-x-3'>
                        <Button
                          size='sm'
                          className='bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm'
                          asChild
                        >
                          <Link
                            href={project.fields.linkDeArticle}
                            title='Demo'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='w-4 h-4 mr-2' />
                            Demo
                          </Link>
                        </Button>
                        <Button
                          size='sm'
                          variant='outline'
                          className='bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm'
                          asChild
                        >
                          <Link
                            href={project.fields.github}
                            title='Código'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='w-4 h-4 mr-2' />
                            Código
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className='absolute top-4 right-4'>
                    <span className='px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30'>
                      Completado
                    </span>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={
                    hoveredProject === project.fields.id
                      ? { scale: 1.1, opacity: 1 }
                      : { scale: 1, opacity: 0.5 }
                  }
                  className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm'
                />
                <motion.div
                  animate={
                    hoveredProject === project.fields.id
                      ? { scale: 1.1, opacity: 1 }
                      : { scale: 1, opacity: 0.5 }
                  }
                  className='absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-sm'
                />
              </motion.div>

              {/* Project Info */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <span className='text-blue-400 font-medium text-sm'>
                      {project.fields.technologiess ? "Fullstack" : "Frontend"}
                    </span>
                    <div className='w-2 h-2 bg-blue-400 rounded-full' />
                    {/* <span className='text-gray-500 text-sm'>
                      {new Date(project.sys.createdAt).getFullYear()}
                    </span> */}
                  </div>

                  <h3 className='text-3xl lg:text-4xl font-bold text-white leading-tight'>
                    {project.fields.appMisPelis}
                  </h3>

                  <p className='text-gray-400 text-lg leading-relaxed'>
                    {project.fields.description ||
                      "Descripción detallada del proyecto no disponible."}
                  </p>
                </div>

                {/* Technologies */}
                {project.fields.technologiess && (
                  <div className='flex flex-wrap gap-3'>
                    {project.fields.technologiess.map((tech) => (
                      <span
                        key={tech.title}
                        className='px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors'
                      >
                        {tech.title}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className='flex items-center space-x-2 text-blue-400 cursor-pointer group'
                >
                  <Link
                    href={project.fields.linkDeArticle}
                    title='Ver proyecto completo'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-medium'
                  >
                    Ver proyecto completo
                  </Link>
                  <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
