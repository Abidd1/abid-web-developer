import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Code, Smartphone, Database, Cloud, Brain, Palette } from 'lucide-react';
import { AlertTitle } from '@/components/ui/alert';
import { title } from 'process';
import { Helmet } from 'react-helmet-async';

// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "About Abid";
  const pageDescription = "Want to know about Best Developer across US and UK? abid ali possess extreme expertise in field of Web and Development | Design. +5 Years of experiences and 50+ projects deliverd with 98% of Clients satisfaction";
  const canonicalUrl = "https://your-website.com/about"; // It have to be Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} - Web and Developer | Designer</title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} - About`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="abid ali possess extreme expertise in field of Web and Development | Design. +5 Years of experiences and 50+ projects deliverd with 98% of Clients satisfaction" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="Want to know about Best Developer across US and UK? abid ali possess extreme expertise in field of Web and Development | Design. +5 Years of experiences and 50+ projects deliverd with 98% of Clients satisfaction" /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} - Web and App Developer | Designer`} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>
    </div>
  );
};


// Operation are ends here
const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux'],
      color: 'text-portfolio-primary'

    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Ionic'],
      color: 'text-portfolio-secondary'
    },
    {
      category: 'Backend Development',
      icon: Database,
      technologies: ['Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'text-portfolio-accent'
    },
    {
      category: 'Non-technical',
      icon: Cloud,
      technologies: ['WordPress', 'Shofify', 'Wix', 'Blogger', 'Meganto'],
      color: 'text-blue-500'
    },
    {
      category: 'Social',
      icon: Brain,
      technologies: ['SEO', 'SMM', 'Blogging', 'Web Vitals', 'Performance'],
      color: 'text-purple-500'
    },
    {
      category: 'Design & UX',
      icon: Palette,
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Principle', 'Canva'],
      color: 'text-pink-500'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'herboilguide.com',
      description: 'Leading development of enterprise-scale applications with microservices architecture.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'pdfebooksworld.com',
      description: 'Developed multiple web and mobile applications for various clients across industries.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'eduiqhub.com',
      description: 'Specialized in creating engaging user interfaces and interactive web experiences.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'Infomistar',
      description: 'Started my professional journey building modern web applications with React.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-portfolio-primary/20 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A passionate Web and App developer and Designer with a mission to create innovative digital solutions 
              that make a positive impact on people's lives and businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold font-poppins mb-6">My Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey into the world of technology began during my College years when I 
                  discovered the power of code to solve real-world problems. What started as curiosity 
                  quickly transformed into a deep passion for creating digital experiences that matter.
                </p>
                <p>
                  Over the past 5+ years, I've had the privilege of working with diverse teams and 
                  clients including Code Voyagers, SK Marketing, and Day Dreamers Foundation and Development Center.
                  from innovative startups to established enterprises. Each project has taught 
                  me something new and reinforced my belief in technology's potential to drive positive change.
                </p>
                <p>
                  Today, I specialize in full-stack development with a focus on modern web technologies 
                  and mobile applications. I'm constantly learning and adapting to stay at the forefront 
                  of technological innovation.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <figure>
                  <img
                  src="./Assets/Rumi.webp"
                  alt="About us section of Abid Ali Web and App Developer and Designer"
                  title='About abid ali Web Developer and Designer'
                  className="rounded-2xl shadow-2xl hover-lift"
                  width={400}
                />
                <figcaption>abid ali Web Developer and Designer</figcaption>
                </figure>
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that enable me 
              to build scalable, efficient, and user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-slate-100`}>
                      <Icon className={`w-8 h-8 ${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold font-poppins ml-4">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional growth and the amazing companies 
              I've had the opportunity to work with.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-portfolio-primary">{item.year}</span>
                </div>
                
                <div className="relative flex-shrink-0 w-4 h-4 bg-portfolio-primary rounded-full mt-2 mr-8">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-20 bg-portfolio-primary/30 transform -translate-x-1/2"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold font-poppins mb-2">{item.title}</h3>
                  <p className="text-portfolio-primary font-medium mb-3">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
