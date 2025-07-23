import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Trophy, Star, Medal, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali - Web and App Developer | Designer";
  const pageDescription = "Looking for a Web or App Developer | Designer major achievments or their previous work? So, here you go! take a detail look for 50+ Web and App projects of abid ali since 2019.";
  const canonicalUrl = "https://your-website.com/about"; //This is also remaining | Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Achievments</title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} |Achievments`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} | Achievments`} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>
    </div>
  );
};

const Achievements = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award 2025',
      organization: 'SMIT Academic Awards',
      date: 'May 2025',
      description: 'Recognized for outstanding contribution to web development and innovative problem-solving approaches.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: Star,
      title: '99% Client Satisfaction Rate',
      organization: 'Client Feedback Survey',
      date: '2025',
      description: 'Maintained exceptional client relationships with consistent 5-star ratings across all projects.',
      color: 'text-portfolio-primary',
      bgColor: 'bg-portfolio-primary/10'
    },
    {
      icon: Award,
      title: 'Google Developers Certified',
      organization: 'Google Developer Groups',
      date: 'September 2024',
      description: 'Demonstrated expertise in Front-end Development and Design.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Medal,
      title: 'Top 1% Developer on SMIT',
      organization: 'SMIT',
      date: '2024',
      description: 'Ranked in the top 1% of developers academically based on contributions and community impact.',
      color: 'text-portfolio-accent',
      bgColor: 'bg-portfolio-accent/10'
    },
    {
      icon: Target,
      title: '100+ Projects Delivered',
      organization: 'Professional Portfolio',
      date: '2024',
      description: 'Successfully completed over 100 diverse projects across various industries and technologies.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Award,
      title: 'Runner-Up Award',
      organization: 'Code to Hack Summit',
      date: 'June 2023',
      description: 'Awarded for developing innovative solutions that significantly improved user experience and business metrics.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const certifications = [
    {
      name: 'Wordpress Solutions Architect',
      issuer: 'WordPress Web Services',
      year: '2023',
      level: 'Professional'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2023',
      level: 'Professional'
    },
    {
      name: 'React Advanced Certification',
      issuer: 'SMIT',
      year: '2022',
      level: 'Advanced'
    },
    {
      name: 'MongoDB Developer',
      issuer: 'edX',
      year: '2022',
      level: 'Professional'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '5+', color: 'text-portfolio-primary' },
    { label: 'Projects Completed', value: '100+', color: 'text-portfolio-secondary' },
    { label: 'Happy Clients', value: '50+', color: 'text-portfolio-accent' },
    { label: 'Awards Won', value: '8', color: 'text-purple-500' },
    { label: 'Certifications', value: '12', color: 'text-blue-500' },
    { label: 'Lines of Code', value: '500K+', color: 'text-green-500' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-portfolio-primary/20 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              My <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A collection of milestones, recognitions, and accomplishments that reflect 
              my commitment to excellence and continuous growth in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl md:text-4xl font-bold font-poppins mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Achievements */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Major <span className="text-gradient">Accomplishments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and awards that highlight my dedication to delivering 
              exceptional results and pushing the boundaries of what's possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl ${achievement.bgColor}`}>
                      <Icon className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-poppins mb-3">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-portfolio-primary font-medium mb-4">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Professional <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuously updating my skills with industry-recognized certifications 
              from leading technology companies and educational platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-card border rounded-xl hover:shadow-lg transition-all duration-300 hover-lift animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-portfolio-primary" />
                  </div>
                  <h3 className="font-semibold font-poppins mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-portfolio-primary/10 text-portfolio-primary px-2 py-1 rounded-full">
                      {cert.level}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
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

export default Achievements;
