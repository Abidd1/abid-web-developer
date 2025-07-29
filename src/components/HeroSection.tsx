import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Web Developer', 'App Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-intro');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-portfolio-primary/20 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-portfolio-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-portfolio-accent/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="order-2 lg:order-1 flex justify-center animate-fade-in-up">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-glow"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover-lift">
                <figure>
                  <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="abid ali Web Developer and Designer Profile picture"
                  title='abid ali Web Developer and Designer Profile Image'
                  aria-describedby='the profile picture of abid ali web, App developer, and designer. '
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption className="sr-only">abid ali Web Developer and Designer profile</figcaption>
                </figure>
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/20 to-transparent"></div>
              </div>
              {/* Floating elements around photo */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-portfolio-secondary rounded-full flex items-center justify-center text-white font-bold animate-float">
                5+
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-portfolio-accent rounded-full flex items-center justify-center text-white font-bold animate-float" style={{animationDelay: '1s'}}>
                100+
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-down">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-portfolio-primary/10 rounded-full text-portfolio-primary font-medium text-sm mb-4">
                👋 Hello, I'm abid ali a Professional Web Developer and Designer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
              <span className="text-white">Creative</span>
              <br />
              <span className="text-gradient">{texts[currentText]}</span>
            </h1>

            {/* === THIS IS THE CHANGED LINE === */}
            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl">
              Crafting exceptional digital experiences with cutting-edge technology. 
              Specializing in modern web applications and innovative mobile solutions 
              that drive business growth and user engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-portfolio-primary text-white rounded-full font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-portfolio-primary/25">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Download CV
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-secondary mb-2">5+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">100+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary mb-2">50+</div>
                <div className="text-slate-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-white hover:text-portfolio-primary transition-colors"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
