
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Application',
    },
    {
      id: 2,
      title: 'Online Calling App',
      description: 'Secure and intuitive calling app',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3',
      tech: ['React Native', 'TypeScript', 'Firebase'],
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'AI Dashboard',
      description: 'Analytics dashboard with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3',
      tech: ['Next.js', 'Python', 'TensorFlow'],
      category: 'Data Science'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of recent projects that demonstrate my expertise in creating 
            innovative digital solutions across various industries and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-portfolio-primary text-white text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins mb-3 group-hover:text-portfolio-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Link
            to="/work"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-portfolio-primary text-white rounded-full font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-portfolio-primary/25"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreview;
