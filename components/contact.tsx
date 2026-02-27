'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './language-provider';
import { personalInfo } from '@/lib/data';
import { useContactForm } from '@/hooks/use-contact-form';
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import dynamic from 'next/dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Import MapComponent with SSR disabled
const Map = dynamic(() => import('./map'), { 
  ssr: false,
  loading: () => (
    <div className="h-80 w-full bg-neutral-900 animate-pulse rounded-3xl border border-neutral-800 flex items-center justify-center">
        <span className="text-neutral-500 text-sm">Loading Live Map...</span>
    </div>
  )
});

export function Contact() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useLanguage();
  const { sendMessage, isSubmitting, success, error } = useContactForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Execute the reCAPTCHA and get the token
    const token = await recaptchaRef.current?.executeAsync();
    
    // Send the form data along with the token to the API
    const success = await sendMessage(data, token || null);
    
    if (success) {
      recaptchaRef.current?.reset(); // Resetta per il prossimo invio
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
            {t('contact_title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info and Map*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <Mail className="w-6 h-6 text-blue-500 mb-4" />
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-sm text-neutral-400">{personalInfo.email}</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
                <MapPin className="w-6 h-6 text-blue-500 mb-4" />
                <h4 className="font-bold mb-1">{t('location_title')}</h4>
                <p className="text-sm text-neutral-400">{personalInfo.location}</p>
              </div>
            </div>
             {/* Map */}
            <Map />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t('contact_name')}
                </label>
                <input
                  {...register('name')}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                    errors.name ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-blue-500 outline-none transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t('contact_email')}
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                    errors.email ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-blue-500 outline-none transition-all`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {t('contact_message')}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-neutral-950 border ${
                    errors.message ? 'border-red-500' : 'border-neutral-800'
                  } focus:border-blue-500 outline-none transition-all resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/*The ReCAPTCHA Component (Invisible or Visible) */}
              {/*<ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
                size="invisible" 
                ref={recaptchaRef}
              />*/}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact_send')}
                  </>
                )}
              </button>

              {/* Success */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-blue-500 text-sm font-bold justify-center"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {t('contact_success')}
                </motion.div>
              )}

              {/* Server Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm font-bold text-center"
                >
                  {error}
                </motion.div>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}