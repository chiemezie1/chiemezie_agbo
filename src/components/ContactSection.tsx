import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Types
interface SocialIconProps {
  icon: React.ComponentType;
  href: string;
  label: string;
}

interface FormState {
  app: string;
  name: string;
  email: string;
  message: string;
}

// SocialIcon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-current hover:text-gray-200 transition-colors duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
  >
    <Icon />
  </motion.a>
);

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className="relative">
    <input
      id={id}
      className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-primary outline-none transition-colors duration-300 peer placeholder-transparent"
      placeholder={label}
      {...props}
    />
    <label
      htmlFor={id}
      className="absolute left-0 -top-3.5 text-gray-600 dark:text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
    >
      {label}
    </label>
  </div>
);

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
  <div className="relative">
    <textarea
      id={id}
      className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-300 focus:border-primary outline-none transition-colors duration-300 peer placeholder-transparent resize-none"
      placeholder={label}
      {...props}
    />
    <label
      htmlFor={id}
      className="absolute left-0 -top-3.5 text-gray-600 dark:text-white text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
    >
      {label}
    </label>
  </div>
);


// Button Component
const MotionButton = motion.button;

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MotionButton
    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-full transition-colors duration-300 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </MotionButton>
);

// ContactSection Component
export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    app: 'My Portfolio',
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set initial dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        { ...formState },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        (response) => {
          console.log('Your Email was successfully sent!', response);
          setIsSubmitted(true);
          setFormState({ ...formState, name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send the email', error);
        }
      );

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-20 dark:bg-gray-100 bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-3xl shadow-lg overflow-hidden text-gray-950">
          <div className="grid md:grid-cols-2 ">
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Input
                label="Name"
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
              <Textarea
                label="Message"
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
              />
              <Button type="submit">
                <FaPaperPlane className="mr-2 inline" />
                Send Message
              </Button>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className="text-green-500 text-center mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
            <motion.div
              className="bg-gray-900 text-white p-8 flex flex-col justify-center items-center space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-center">
                I'm always open to new opportunities and collaborations. Let's create something amazing together!
              </p>
              <div className="flex space-x-6">
                <SocialIcon icon={FaGithub} href="https://github.com/chiemezie1" label="GitHub" />
                <SocialIcon icon={FaLinkedin} href="https://www.linkedin.com/in/chiemezieagbo/" label="LinkedIn" />
                <SocialIcon icon={FaTwitter} href="https://x.com/ChiemezieAgbo" label="Twitter" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
