import React from 'react';

const Team = () => {
  const team = [
    {
      name: 'Alexander Hartwell',
      role: 'Founder & Managing Partner',
      bio: 'Former Goldman Sachs MD with 25+ years in alternative investments. MBA from Harvard Business School.',
      image: 'AH',
    },
    {
      name: 'Victoria Chen',
      role: 'Chief Investment Officer',
      bio: 'Previously led quantitative strategies at Bridgewater Associates. PhD in Financial Engineering from MIT.',
      image: 'VC',
    },
    {
      name: 'Marcus Thornfield',
      role: 'Head of Private Equity',
      bio: 'Ex-McKinsey Partner with extensive operational experience. Led over $5B in PE transactions.',
      image: 'MT',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Chief Risk Officer',
      bio: 'Former JPMorgan risk executive. Specializes in portfolio risk management and regulatory compliance.',
      image: 'ER',
    },
    {
      name: 'Jonathan Pierce',
      role: 'Managing Director, Consulting',
      bio: '20 years advising Fortune 100 companies on strategy and transformation. Wharton MBA.',
      image: 'JP',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Head of Investor Relations',
      bio: 'Previously at BlackRock IR team. Manages relationships with institutional investors globally.',
      image: 'SM',
    },
  ];

  return (
    <section id="team" className="section-padding bg-navy-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold">Our Leadership</span>
          <h2 className="heading-serif text-navy-900 mt-4 mb-6">
            World-Class Investment Professionals
          </h2>
          <p className="max-w-2xl mx-auto text-navy-600 text-lg leading-relaxed">
            Our team brings together decades of experience from the world's leading 
            financial institutions, consulting firms, and operating companies.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-lg overflow-hidden card-hover group"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 rounded-full filter blur-2xl"></div>
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-serif text-2xl font-bold z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {member.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-1 group-hover:text-gold-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gold-600 text-sm uppercase tracking-wider font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-sm p-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-2xl text-white mb-4">Join Our Team</h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                We're always looking for exceptional talent to join our growing team. 
                Explore career opportunities at Aurum Capital.
              </p>
              <a
                href="#contact"
                className="inline-block btn-primary"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
