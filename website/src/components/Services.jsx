import React from 'react';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Hedge Fund Management',
      description: 'Sophisticated investment strategies employing quantitative analysis, long-short equity, and global macro approaches to generate alpha across market cycles.',
      features: ['Long/Short Equity', 'Global Macro Strategies', 'Quantitative Trading', 'Risk Arbitrage'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Private Equity',
      description: 'Strategic acquisitions and growth capital investments in middle-market companies with strong fundamentals and significant value creation potential.',
      features: ['Buyout Transactions', 'Growth Capital', 'Distressed Assets', 'Value Creation'],
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Strategic Consulting',
      description: 'Comprehensive advisory services for corporations, family offices, and institutional investors seeking strategic guidance on M&A, restructuring, and growth initiatives.',
      features: ['M&A Advisory', 'Corporate Strategy', 'Operational Improvement', 'Financial Restructuring'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-navy-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
          <h2 className="heading-serif text-navy-900 mt-4 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-navy-600 text-lg leading-relaxed">
            We offer a full spectrum of financial services, combining deep industry expertise 
            with innovative strategies to deliver exceptional outcomes for our clients and investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-10 rounded-sm shadow-lg card-hover group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center rounded-sm mb-6 text-white transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-navy-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                    <span className="text-navy-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center mt-8 text-gold-600 hover:text-gold-700 font-semibold text-sm uppercase tracking-wider group/link"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-navy-600 mb-6">
            Interested in learning more about our services?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
