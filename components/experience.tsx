'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from './language-provider';
import { experiences } from '@/lib/data';

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-4">
            {t('exp_title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {exp.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GradCap className="w-5 h-5" />}
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-bold text-neutral-50">{exp.company}</div>
                  <time className="font-mono text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded">
                    {exp.period[language]}
                  </time>
                </div>
                <div className="text-sm font-semibold text-neutral-300 mb-2">{exp.role[language]}</div>
                <div className="text-sm text-neutral-400 leading-relaxed">
                  {exp.description[language]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GradCap(props: any) {
  return <GraduationCap {...props} />;
}
