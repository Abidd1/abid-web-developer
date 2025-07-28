import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Send, CheckCircle, Clock, Users, Award, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendFormToEmail } from '@/utils/emailService';
import { Helmet } from 'react-helmet-async';


// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali - Web and App Developer | Designer";
  const pageDescription = "Want to Hire a Best Developer for your Website or App Development and Design? abid ali with +5 years of experinces and 50+ projects delivered with 98% of clients satisfiction Globally, recognised by Infomistar, Code Voyagers, and SMIT.";
  const canonicalUrl = "https://your-website.com/about"; // Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Hire Now</title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} | Hire Now`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="Want to Hire a Best Developer for your Website or App Development and Design? abid ali with +5 years of experinces and 50+ projects delivered with 98% of clients satisfiction Globally, recognised by Infomistar, Code Voyagers, and SMIT." /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} | Hire Now`} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* ... rest of your about page content */}
    </div>
  );
};

const Hire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email
      await sendFormToEmail(formData, 'hire');
      
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Project inquiry sent successfully!",
        description: "Thank you for your interest. We'll review your project and get back to you within 12 hours.",
      });

      setFormData({
        name: '', email: '', company: '', projectType: '', budget: '', 
        timeline: '', description: '', requirements: ''
      });
    } catch (error) {
      toast({
        title: "Error sending inquiry",
        description: "Please try again or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React/Next.js Applications', 'Full-Stack Development', 'API Integration', 'Performance Optimization' , 'SEO'],
      priceRange: '$5,000 - $25,000'
    },
    {
      icon: CheckCircle,
      title: 'Mobile App Development',  
      description: 'Cross-platform mobile applications for iOS and Android.',
      features: ['React Native Apps', 'Native iOS/Android', 'App Store Deployment', 'Push Notifications'],
      priceRange: '$8,000 - $35,000'
    },
    {
      icon: Users,
      title: 'UI/UX Design',
      description: 'User-centered design that creates exceptional digital experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing'],
      priceRange: '$3,000 - $15,000'
    },
    {
      icon: Award,
      title: 'Consulting & Audit',
      description: 'Technical consultation and code review for existing projects.',
      features: ['Architecture Review', 'Performance Audit', 'Security Assessment', 'Technology Strategy'],
      priceRange: '$0/hour'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We discuss your project requirements, goals, and vision in detail.'
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'We will create a comprehensive proposal with timeline, milestones, and deliverables.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Regular updates and collaboration throughout the development process.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing, deployment, and post-launch support.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-portfolio-primary/20 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              Hire <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your ideas into exceptional digital experiences? 
              Let's collaborate and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-portfolio-primary text-white rounded-full font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-portfolio-primary/10 rounded-xl">
                      <Icon className="w-8 h-8 text-portfolio-primary" />
                    </div>
                    <span className="text-portfolio-primary font-semibold text-lg">
                      {service.priceRange}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold font-poppins mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-5 h-5 text-portfolio-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach that ensures transparency, quality, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-portfolio-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-portfolio-primary/20"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Start Your <span className="text-gradient">Project</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and We'll get back to you within 12 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-plus-months">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors resize-none"
                  placeholder="Describe your project, goals, and what you're looking to achieve..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium mb-2">
                  Specific Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-portfolio-primary transition-colors resize-none"
                  placeholder="Any specific features, technologies, or requirements you have in mind..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center space-x-2 px-12 py-4 bg-portfolio-primary text-white rounded-full font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100 shadow-lg hover:shadow-portfolio-primary/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hire;
