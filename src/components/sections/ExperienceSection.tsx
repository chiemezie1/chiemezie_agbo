'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaBuilding, FaCheck } from 'react-icons/fa';
import { ANIMATION_VARIANTS } from '@/lib/constants';
import { experienceSummary, certifications, education, achievements } from '@/data/personal';

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
    variants={ANIMATION_VARIANTS.fadeInUp}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
        <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {experience.title}
        </h3>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <FaBuilding className="text-sm" />
            <span>{experience.company} • {experience.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendar className="text-sm" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
      {experience.achievements.map((achievement: string, idx: number) => (
        <div key={idx} className="flex items-start gap-3">
          <FaCheck className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const CertificationBadge = ({ certification }: { certification: string }) => (
  <motion.div
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
    variants={ANIMATION_VARIANTS.fadeInUp}
    whileHover={{ scale: 1.05 }}
  >
    {certification}
  </motion.div>
);

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.staggerChildren}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBriefcase className="text-blue-600 dark:text-blue-400 text-3xl" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Experience
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional journey and key accomplishments
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experienceSummary.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>

          {/* Education */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {education.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {education.institution} • {education.location}
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  {education.duration}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Key Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Recognition and accomplishments in the blockchain and tech community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl border border-blue-200 dark:border-gray-600"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Professional certifications and continuous learning
              </p>
            </div>

            <motion.div
              variants={ANIMATION_VARIANTS.staggerChildren}
              className="flex flex-wrap justify-center gap-4"
            >
              {certifications.map((certification, index) => (
                <CertificationBadge key={index} certification={certification} />
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Summary Stats */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
