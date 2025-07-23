
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali - Web and App Developer | Designer";
  const pageDescription = "+5 years of experience, 50+ projects delivered, 98% Clients satisfiction rate Globally, and featured by SMIT as a top #1 Developer academically. Take a detail look for a professional Web and App Developer | Designer abid ali.";
  const canonicalUrl = "https://your-website.com/about"; // Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Work </title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} |Work`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="+5 years of experience, 50+ projects delivered, 98% Clients satisfiction rate Globally, and featured by SMIT as a top #1 Developer academically. Take a detail look for a professional Web and App Developer | Designer abid ali's Work he had done till now." /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} |Work`} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>
    </div>
  );
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Web Applications', 'Mobile Apps', 'E-commerce', 'AI/ML'];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Real-time inventory', 'Payment integration', 'Admin dashboard', 'Mobile responsive'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Online Calling App',
      description: 'Secure and intuitive online calling application with video featuress, real-time face to face fast and secure app, and comprehensive profile status management tools.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3',
      category: 'Mobile Apps',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Jest'],
      features: ['Video Calls', 'Voice Call', 'Profile Status', 'Push notifications'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Live'
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics dashboard powered by machine learning algorithms for predictive insights and data visualization.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3',
      category: 'AI/ML',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      features: ['Predictive analytics', 'Interactive charts', 'Real-time data', 'ML models'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3',
      category: 'Web Applications',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'Redis', 'CloudFlare'],
      features: ['Real-time chat', 'Content feeds', 'Privacy controls', 'Media sharing'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'In Development'
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Collaborative project management tool with advanced features for team coordination and productivity tracking.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3',
      category: 'Web Applications',
      technologies: ['React', 'GraphQL', 'Apollo', 'Node.js', 'Docker'],
      features: ['Team collaboration', 'Time tracking', 'Project analytics', 'Integration APIs'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Live'
    },
    {
      id: 6,
      title: 'Health & Fitness App',
      description: 'Comprehensive health tracking application with workout plans, nutrition tracking, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
      category: 'Mobile Apps',
      technologies: ['Flutter', 'Dart', 'Firebase', 'HealthKit', 'Charts'],
      features: ['Workout tracking', 'Nutrition logs', 'Progress charts', 'Social features'],
      demoUrl: '#',
      githubUrl: '#',
      status: 'Live'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-portfolio-primary/20 to-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in-down">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              My <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of projects that demonstrate our expertise in creating innovative 
              digital solutions across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-portfolio-primary text-white shadow-lg'
                    : 'bg-white text-muted-foreground hover:bg-portfolio-primary/10 hover:text-portfolio-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-portfolio-primary text-white text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-poppins mb-3 group-hover:text-portfolio-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-portfolio-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-portfolio-primary text-white rounded-lg text-sm font-medium hover:bg-portfolio-primary/80 transition-colors">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </button>
                    <button className="px-4 py-2 border border-portfolio-primary text-portfolio-primary rounded-lg text-sm font-medium hover:bg-portfolio-primary/10 transition-colors">
                      <Github size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold font-poppins mb-6">
              Ready to Start Your <span className="text-gradient">Project?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with innovative technology solutions.
            </p>
            <button className="px-8 py-4 bg-portfolio-primary text-white rounded-full font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-portfolio-primary/25">
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
