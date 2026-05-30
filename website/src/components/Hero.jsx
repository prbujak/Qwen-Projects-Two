import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        {/* Geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm uppercase tracking-wider">Excellence in Finance & Strategy</span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-serif text-white leading-tight">
            Strategic Capital.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Exceptional Returns.
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 font-light leading-relaxed">
            Aurum Capital Partners is a premier investment firm specializing in hedge fund management, 
            private equity, and strategic consulting. We deliver superior value through disciplined 
            investing and operational excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#contact" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10 mt-16">
            {[
              { value: '$12B+', label: 'Assets Under Management' },
              { value: '250+', label: 'Portfolio Companies' },
              { value: '35%', label: 'Average IRR' },
              { value: '20+', label: 'Years of Excellence' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-gold-400 mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
