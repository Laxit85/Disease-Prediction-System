import { Link } from 'react-router-dom';
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Globe,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function Footer() {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/#services' },
      { name: 'Contact', path: '/contact' },
    ],
    Services: [
      { name: 'Check Disease', path: '/check-disease' },
      { name: 'History', path: '/history' },
      { name: 'Emergency Contact', path: '/emergency' },
      { name: 'Health Guide', path: '/health-guide' },
    ],
  };

  const socialLinks = [
    {
      icon: Globe,
      href: 'https://laxit-portfolio.netlify.app/',
      label: 'Website',
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/917878429752',
      label: 'WhatsApp',
      isWhatsapp: true,
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/thewebcraft25',
      label: 'Instagram',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/laxit-jangid-8588a3257/',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 pt-16 pb-8">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">HealthAI</h3>
                <p className="text-xs text-gray-400 tracking-wide">
                  AI Disease Prediction
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              HealthAI is an AI-powered disease prediction platform designed to
              provide early health insights, improve awareness, and support
              informed medical decisions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon
                    className={`h-4 w-4 transition-colors ${
                      social.isWhatsapp
                        ? 'text-green-500 hover:text-green-400'
                        : 'text-gray-400 hover:text-teal-400'
                    }`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="relative text-gray-400 hover:text-teal-400 text-sm transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-teal-400 hover:after:w-full after:transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5" />
                <span>laxitjangid2k5@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                <span>+91 78784 29752</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span>Jodhpur, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HealthAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
