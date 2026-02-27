'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { useLanguage } from './language-provider';
import { personalInfo } from '@/lib/data';
import Image from 'next/image';

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            {personalInfo.role}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-tight mb-6">
            {personalInfo.tagline[language]}
          </h1>
          <p className="text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed">
            {language === 'en' 
              ? `Based in ${personalInfo.location}, I specialize in designing and developing scalable, high-performance back end systems, focusing on clean architecture, efficient data management, and robust API design.`
              : `Con sede a ${personalInfo.location}, sono specializzato nella progettazione e nello sviluppo di sistemi back end scalabili e ad alte prestazioni, con particolare attenzione ad architetture pulite, gestione efficiente dei dati e progettazione di API robuste.`}
            </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20"
            >
              {t('hero_contact_me')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={personalInfo.cvUrl}
              className="px-8 py-4 bg-neutral-900 text-neutral-50 font-bold rounded-xl border border-neutral-800 hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t('hero_download_cv')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square max-w-md mx-auto md:ml-auto"
        >
          <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-3xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-blue-500/30 bg-neutral-900 shadow-2xl shadow-blue-500/10">
            <Image
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px" // Recommended for 'fill'
              className="object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
