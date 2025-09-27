import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // NOTE: No backend yet — static site. This simulates a submit.
    await new Promise((r) => setTimeout(r, 1200));

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert("Thanks! Your message wasn't actually sent (no backend), but the contact links above are real.");
  };

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
  ].filter(Boolean) as { icon: any; label: string; href: string; color: string }[];

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
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your next project or explore opportunities? Let's connect.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const Wrapper: React.ElementType = info.href ? 'a' : 'div';
                    return (
                      <Wrapper
                        key={index}
                        href={info.href as any}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                          info.href ? 'hover:bg-gray-50' : ''
                        }`}
                      >
                        <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{info.label}</div>
                          <div className="text-gray-800 font-medium">{info.value}</div>
                        </div>
                        {info.href && (
                          <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                        )}
                      </Wrapper>
                    );
                  })}
                </div>

                {/* Social Links */}
                {(socialLinks?.length ?? 0) > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 bg-white rounded-xl border border-gray-200 shadow-lg transition-all duration-300 ${social.color}`}
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.96 }}
                            aria-label={social.label}
                          >
                            <IconComponent className="w-6 h-6" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quick CTAs */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Prefer email?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    I typically respond within 24–48 hours.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Me
                    </a>
                    <a
                      href={`tel:${profile.phone.replace(/[^+\\d]/g, '')}`}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (static, no backend) */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                        placeholder="your.email@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
