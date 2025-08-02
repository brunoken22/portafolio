"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { mensaje } from "@/lib/hook";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      await mensaje({
        name: data.name,
        email: data.email,
        message: `${data.subject}\n\n${data.message}`,
      });
      setShowSuccess(true);
      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bruno_am_22@hotmail.com",
      href: "mailto:bruno_am_22@hotmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 9 11 6120-4047",
      href: "tel:+541161204047",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Enviar mensaje",
      href: "https://wa.me/541161204047",
    },
  ];

  return (
    <section id='contact' className='py-32 px-6 relative'>
      {/* Success Notification */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className='fixed top-4 right-4 z-50 bg-green-500/90 text-white p-4 rounded-lg shadow-lg max-w-md'
        >
          <div className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-500'>
              ✓
            </div>
            <div>
              <h3 className='font-bold'>¡Mensaje enviado!</h3>
              <p className='text-sm'>Gracias por contactarme, te responderé lo antes posible.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent' />

      <div className='container mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <span className='text-blue-400 font-medium tracking-wider uppercase text-sm'>
            Contacto
          </span>
          <h2 className='text-4xl lg:text-6xl font-bold text-white mt-4 mb-6'>
            Trabajemos{" "}
            <span className='bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent'>
              Juntos
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas
            realidad.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-white mb-8'>Información de Contacto</h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group'
                >
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='text-gray-400 text-sm'>{info.label}</p>
                    <p className='text-white font-medium'>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className='p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl'
            >
              <div className='flex items-center space-x-3 mb-3'>
                <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse' />
                <span className='text-green-400 font-medium'>Disponible para proyectos</span>
              </div>
              <p className='text-gray-400 text-sm'>
                Actualmente acepto nuevos proyectos freelance y oportunidades de colaboración.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-white font-medium text-sm'>Nombre *</label>
                  <Input
                    required
                    {...register("name")}
                    placeholder='Tu nombre'
                    className='bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-white font-medium text-sm'>Email *</label>
                  <Input
                    type='email'
                    required
                    {...register("email")}
                    placeholder='tu@email.com'
                    className='bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='text-white font-medium text-sm'>Asunto *</label>
                <Input
                  required
                  {...register("subject")}
                  placeholder='¿En qué puedo ayudarte?'
                  className='bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-white font-medium text-sm'>Mensaje *</label>
                <Textarea
                  required
                  rows={6}
                  {...register("message")}
                  placeholder='Cuéntame sobre tu proyecto, presupuesto y timeline...'
                  className='bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none'
                />
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-4 rounded-xl font-medium shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <div className='flex items-center space-x-2'>
                    <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className='flex items-center space-x-2'>
                    <Send className='w-4 h-4' />
                    <span>Enviar Mensaje</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Response Time */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className='text-gray-500 text-sm text-center mt-4'
            >
              Respondo típicamente en menos de 24 horas
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className='fixed bottom-8 right-8 z-50'
      >
        <Button
          size='lg'
          onClick={() => window.open("https://wa.me/541161204047", "_blank")}
          className='w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 p-0 group'
        >
          <MessageCircle className='w-7 h-7 group-hover:scale-110 transition-transform' />
        </Button>
      </motion.div>
    </section>
  );
}
