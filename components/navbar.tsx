'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './language-provider';
import { personalInfo } from '@/lib/data';

const navItems = [
  { id: 'home', labelKey: 'nav_home' },
  { id: 'experience', labelKey: 'nav_experience' },
  { id: 'projects', labelKey: 'nav_projects' },
  { id: 'contact', labelKey: 'nav_contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'it' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-display font-bold tracking-tighter text-blue-500"
        >
          {personalInfo.name.split(' ').map(n => n[0]).join('')}.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-neutral-400 hover:text-blue-500 transition-colors"
            >
              {t(item.labelKey)}
            </motion.a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-blue-500 transition-colors border-l border-neutral-800 pl-8 ml-4"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className="p-2 text-neutral-400">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-neutral-400">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-neutral-300 hover:text-blue-500"
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
