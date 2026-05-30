import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our dealings, fostering trust with investors, partners, and portfolio companies.',
    },
    {
      title: 'Excellence',
      description: 'Our commitment to excellence drives every decision, from investment analysis to portfolio management and client service.',
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge strategies and technologies to identify opportunities and generate superior returns.',
    },
    {
      title: 'Discipline',
      description: 'Rigorous risk management and disciplined investment processes form the foundation of our approach.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-gold-600 uppercase tracking-widest text-sm font-semibold">About Aurum Capital</span>
            <h2 className="heading-serif text-navy-900 mt-4 mb-8">
              Two Decades of Creating Value
            </h2>
            <div className="space-y-6 text-navy-600 leading-relaxed">
              <p>
                Founded in 2004, Aurum Capital Partners has established itself as a leading 
                alternative investment firm, managing over $12 billion in assets across hedge 
                funds, private equity, and strategic advisory mandates.
              </p>
              <p>
                Our team comprises seasoned professionals from top-tier investment banks, 
                consulting firms, and operating companies, bringing diverse expertise and 
                deep industry knowledge to every engagement.
              </p>
              <p>
                We believe in a hands-on approach to value creation, working closely with 
                management teams to implement strategic initiatives, operational improvements, 
                and growth strategies that drive sustainable success.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <div key={index} className="border-l-2 border-gold-500 pl-6">
                  <h4 className="font-serif text-lg text-navy-900 mb-2">{value.title}</h4>
                  <p className="text-navy-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center">
                <span className="font-serif text-white text-3xl font-bold">A</span>
              </div>
              <div>
                <p className="font-serif text-navy-900 text-xl">Alexander Hartwell</p>
                <p className="text-navy-600 text-sm">Founder & Managing Partner</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-navy-800 to-navy-900 rounded-sm overflow-hidden relative">
              {/* Abstract geometric design */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600 rounded-full filter blur-3xl"></div>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-8">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="font-serif text-5xl text-gold-400">20+</span>
                    <span className="text-white/80 text-lg">Years of Excellence</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Building lasting partnerships and delivering consistent returns 
                    through multiple market cycles.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-sm opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-500 rounded-sm opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
