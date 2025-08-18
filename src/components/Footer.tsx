'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMedium, FaHeart } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { scrollToElement } from '@/lib/utils';

const SocialIcon = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.button
    onClick={() => scrollToElement(href.substring(1))}
    className="block w-full text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-300 text-left py-1"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.button>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                C
              </div>
              <div>
                <h3 className="text-xl font-bold">{PERSONAL_INFO.name}</h3>
                <p className="text-gray-400 text-sm">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building the future of decentralized finance while staying grounded in faith,
              family, and purpose.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                <span className="text-sm">{PERSONAL_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-sm">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <div className="flex gap-4">
              <SocialIcon icon={FaGithub} href={SOCIAL_LINKS.github} label="GitHub" />
              <SocialIcon icon={FaLinkedin} href={SOCIAL_LINKS.linkedin} label="LinkedIn" />
              <SocialIcon icon={FaTwitter} href={SOCIAL_LINKS.twitter} label="Twitter" />
              <SocialIcon icon={FaMedium} href={SOCIAL_LINKS.medium} label="Medium" />
            </div>
            <p className="text-gray-400 text-sm">
              Let's connect and build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 w-4 h-4" />
              </motion.div>
              <span>and guided by faith</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}