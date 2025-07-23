
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ExternalLink, ArrowRight,Github, Download, DownloadIcon } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali - Web and App Developer | Designer";
  const pageDescription = "Looking for best resources to cover the your neeed about Website or App Development | Design? take a detail look for free resources provided by the expert Developer abid ali. Dive into each and every Blog Deeply.";
  const canonicalUrl = "https://your-website.com/about"; // Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Blogs</title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} | Blogs`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} | Blogs`} />
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
      title: 'Difference between App and Web App? Complete details',
      description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
      category: 'E-commerce',
    },
    {
      id: 2,
      title: 'Online Calling App',
      description: 'Secure and intuitive online calling application with video featuress, real-time face to face fast and secure app, and comprehensive profile status management tools.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3',
      category: 'Mobile Apps',
      demoUrl: '#',
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics dashboard powered by machine learning algorithms for predictive insights and data visualization.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3',
      category: 'AI/ML',
      demoUrl: '#',
   },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3',
      category: 'Web Applications',
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Collaborative project management tool with advanced features for team coordination and productivity tracking.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3',
      category: 'Web Applications',
      demoUrl: '#',
    },
    {
      id: 6,
      title: 'Health & Fitness App',
      description: 'Comprehensive health tracking application with workout plans, nutrition tracking, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
      category: 'Mobile Apps',
      demoUrl: '#',
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
               Helpfull <span className="text-gradient">Blogs</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of the most helpfull blogs that every web or App seeker want to know,
              here is the best details for all the clients, developer and learneres. 
              Take a detail look now for a helpfull blogs.
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
                    </div>
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
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-portfolio-primary text-white rounded-lg text-sm font-medium hover:bg-portfolio-primary/80 transition-colors">
                      <span>Read More</span>
                      <ArrowRight size={16} />
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
