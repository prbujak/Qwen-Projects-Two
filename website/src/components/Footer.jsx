import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Hedge Fund Management', href: '#services' },
      { name: 'Private Equity', href: '#services' },
      { name: 'Strategic Consulting', href: '#services' },
      { name: 'Investor Relations', href: '#contact' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Careers', href: '#contact' },
    ],
    resources: [
      { name: 'Insights', href: '#' },
      { name: 'News & Press', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Disclosures', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="section-padding pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center rounded-sm">
                  <span className="font-serif text-white text-xl font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-serif text-white text-xl tracking-wide">AURUM</h3>
                  <p className="text-gold-400 text-xs tracking-widest uppercase">Capital Partners</p>
                </div>
              </a>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A premier investment firm delivering exceptional returns through 
                disciplined investing, strategic advisory, and operational excellence.
              </p>
              <div className="flex space-x-4">
                {['L', 'T', 'F'].map((letter, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-gold-500 flex items-center justify-center rounded-sm transition-colors duration-300"
                  >
                    <span className="text-white font-semibold text-sm">{letter}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold-400">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold-400">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold-400">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-gold-400">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/40 text-sm">
                © {currentYear} Aurum Capital Partners. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <p className="text-white/40 text-sm">
                  Registered Investment Advisor
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white/60 text-sm">SEC Regulated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/30 text-xs leading-relaxed text-center max-w-4xl mx-auto">
              This website is intended for informational purposes only and does not constitute 
              an offer to sell or a solicitation of an offer to buy any securities. Past performance 
              is not indicative of future results. Investments involve risk, including the potential 
              loss of principal. Please consult with your financial, legal, and tax advisors before 
              making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
