'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^+\\d]/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: undefined,
    },
  ];

  const socialLinks = [
    profile.socials.linkedin
      ? { icon: Linkedin, label: 'LinkedIn', href: profile.socials.linkedin, color: 'hover:text-indigo-600' }
      : null,
    profile.socials.github
      ? { icon: Github, label: 'GitHub', href: profile.socials.github, color: 'hover:text-gray-800' }
      : null,
    profile.socials.stackoverflow
      ? { icon: ExternalLink, label: 'Stack Overflow', href: profile.socials.stackoverflow, color: 'hover:text-orange-600' }
      : null,
  ].filter(Boolean) as { icon: typeof Mail; label: string; href: string; color: string }[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your next project or explore opportunities? Let&apos;s connect.
            </p>
          </motion.div>

          {/* Contact Information - Centered Single Column */}
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="card">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const Wrapper: React.ElementType = info.href ? 'a' : 'div';
                    return (
                      <Wrapper
                        key={index}
                        href={info.href as string | undefined}
                        className={`text-center p-6 rounded-xl transition-all duration-300 ${
                          info.href ? 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg' : ''
                        }`}
                      >
                        <div className="inline-flex p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl border border-blue-100 dark:border-blue-700 mb-4">
                          <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</div>
                        <div className="text-gray-800 dark:text-gray-200 font-semibold">{info.value}</div>
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Social Links */}
                {(socialLinks?.length ?? 0) > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h4 className="text-lg font-semibold mb-6 text-center text-gray-900 dark:text-white">Connect With Me</h4>
                    <div className="flex justify-center gap-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 shadow-lg transition-all duration-300 ${social.color}`}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            aria-label={social.label}
                          >
                            <IconComponent className="w-7 h-7 dark:text-gray-300" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quick CTA - Highlight Cost Optimization */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30 rounded-xl border border-purple-200 dark:border-purple-700">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Featured Achievement</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    Reduced OSWorld++ evaluation costs by <strong className="dark:text-white">67%</strong> through intelligent Pioneer/Follower caching architecture — saving <strong className="dark:text-white">$16,757</strong> per full run while maintaining 100% success rate.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=Let's discuss your cost optimization work`}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                    {profile.socials.linkedin && (
                      <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
