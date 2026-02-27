'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/data';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav_home: 'Home',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_download_cv: 'Download CV',
    hero_contact_me: 'Contact Me',
    exp_title: 'Experience & Education',
    proj_title: 'Featured Projects',
    proj_all: 'All',
    proj_backend: 'Backend',
    proj_fullstack: 'Full Stack',
    contact_title: 'Get in Touch',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send Message',
    location_title: 'Location',
    contact_map_distance: 'Approx. 90km apart',
    contact_map_title: 'Operating Areas',
    contact_success: 'Message sent successfully!',
    footer_rights: 'All rights reserved.',
    last_update: 'Last update'
  },
  it: {
    nav_home: 'Home',
    nav_experience: 'Esperienza',
    nav_projects: 'Progetti',
    nav_contact: 'Contatti',
    hero_download_cv: 'Scarica CV',
    hero_contact_me: 'Contattami',
    exp_title: 'Esperienza e Istruzione',
    proj_title: 'Progetti Selezionati',
    proj_all: 'Tutti',
    proj_backend: 'Backend',
    proj_fullstack: 'Full Stack',
    contact_title: 'Contattami',
    contact_name: 'Nome',
    contact_email: 'Email',
    location_title: 'Posizione',
    contact_message: 'Messaggio',
    contact_send: 'Invia Messaggio',
    contact_map_distance: 'Circa 90km di distanza',
    contact_map_title: 'Aree Operative',
    contact_success: 'Messaggio inviato con successo!',
    footer_rights: 'Tutti i diritti riservati.',
    last_update: 'Ultimo aggiornamento'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('pref_lang') as Language;
      if (saved && (saved === 'en' || saved === 'it')) {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pref_lang', lang);
    document.cookie = `pref_lang=${lang}; path=/; max-age=31536000`;
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
