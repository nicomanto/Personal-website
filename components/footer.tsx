'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from './language-provider';
import { personalInfo } from '@/lib/data';

export function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Extract the year from the env variable (assuming format DD/MM/YYYY)
  const lastUpdateYear = process.env.NEXT_PUBLIC_DATE_NOW?.split("/")[2] || currentYear;

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  return (
    <footer className="py-12 px-6 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-display font-bold tracking-tighter text-blue-500">
            {personalInfo.name}.
          </span>
          <p className="text-sm text-neutral-500">
            © {currentYear} {personalInfo.name}. {t('footer_rights')}
          </p>
          {/* Added Last Update Section */}
          <p className="text-[10px] uppercase tracking-wider text-neutral-600 mt-1">
            {t('last_update')}: {lastUpdateYear}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-500 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-neutral-500 hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-bold text-neutral-400 hover:text-blue-500 hover:border-blue-500/50 transition-all"
        >
          <Globe className="w-4 h-4" />
          {language === 'it' ? 'Italiano' : 'English'}
        </button>
      </div>
    </footer>
  );
}
