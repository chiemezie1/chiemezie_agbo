'use client';

import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';
import { ANIMATION_VARIANTS, CORE_SKILLS } from '@/lib/constants';
import { coreSkills } from '@/data/personal';

const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center"
    variants={ANIMATION_VARIANTS.fadeInUp}
    whileHover={{ y: -1, scale: 1.02 }}
  >
    <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
  </motion.div>
);

const SkillCategory = ({
  title,
  skills,
  color
}: {
  title: string;
  skills: string[];
  color: string;
}) => (
  <motion.div
    className="space-y-4"
    variants={ANIMATION_VARIANTS.fadeInUp}
  >
    <div className="text-center">
      <h3 className={`text-xl font-bold text-${color}-600 dark:text-${color}-400 mb-2`}>
        {title}
      </h3>
    </div>

    <motion.div
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
      variants={ANIMATION_VARIANTS.staggerChildren}
    >
      {skills.map((skill) => (
        <SkillBadge key={skill} skill={skill} />
      ))}
    </motion.div>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCogs className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Technical Skills
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Core technologies and tools I use to build exceptional software
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-8">
            <SkillCategory
              title="Smart Contract Development"
              skills={coreSkills["Smart Contract Development"]}
              color="purple"
            />

            <SkillCategory
              title="Web Development"
              skills={coreSkills["Web Development"]}
              color="blue"
            />

            <SkillCategory
              title="Programming Languages"
              skills={coreSkills["Programming Languages"]}
              color="green"
            />

            <SkillCategory
              title="Blockchain Tools"
              skills={coreSkills["Blockchain Tools"]}
              color="indigo"
            />

            <SkillCategory
              title="Version Control & Tools"
              skills={coreSkills["Version Control & Tools"]}
              color="orange"
            />
          </div>

          {/* Core Skills Summary */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="mt-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Core Competencies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {CORE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
