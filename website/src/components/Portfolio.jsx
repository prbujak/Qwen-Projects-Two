import React from 'react';

const Portfolio = () => {
  const investments = [
    {
      category: 'Private Equity',
      company: 'TechVision Solutions',
      description: 'Enterprise software company specializing in AI-driven analytics',
      status: 'Active',
      return: '3.2x MOIC',
    },
    {
      category: 'Hedge Fund',
      company: 'Global Macro Fund IV',
      description: 'Diversified macro strategy across currencies, rates, and commodities',
      status: 'Active',
      return: '28% YTD',
    },
    {
      category: 'Private Equity',
      company: 'Meridian Healthcare',
      description: 'Regional healthcare services provider with 15 facilities',
      status: 'Exited',
      return: '4.1x MOIC',
    },
    {
      category: 'Consulting',
      company: 'Fortune 500 Retailer',
      description: 'Strategic restructuring and operational transformation',
      status: 'Completed',
      return: '$250M Value Created',
    },
    {
      category: 'Hedge Fund',
      company: 'Long/Short Equity Fund',
      description: 'Concentrated portfolio of high-conviction equity positions',
      status: 'Active',
      return: '22% Annualized',
    },
    {
      category: 'Private Equity',
      company: 'Apex Manufacturing',
      description: 'Industrial components manufacturer serving aerospace sector',
      status: 'Active',
      return: '2.8x MOIC',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 uppercase tracking-widest text-sm font-semibold">Our Track Record</span>
          <h2 className="heading-serif text-white mt-4 mb-6">
            Proven Investment Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">
            Our portfolio spans diverse sectors and strategies, united by our commitment 
            to rigorous analysis, active management, and value creation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6 card-hover group"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold-400 text-xs uppercase tracking-wider font-semibold">
                  {investment.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    investment.status === 'Active'
                      ? 'bg-green-500/20 text-green-400'
                      : investment.status === 'Exited'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gold-500/20 text-gold-400'
                  }`}
                >
                  {investment.status}
                </span>
              </div>

              {/* Company Name */}
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {investment.company}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {investment.description}
              </p>

              {/* Return Metric */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/50 text-xs uppercase tracking-wider">Performance</span>
                  <span className="text-gold-400 font-semibold">{investment.return}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs text-center leading-relaxed">
            Past performance is not indicative of future results. Returns shown are net of fees 
            and represent selected investments only. Full track record available upon request 
            to qualified investors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
