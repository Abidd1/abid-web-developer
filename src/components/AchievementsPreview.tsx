import { Award, Trophy, Star, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AchievementsPreview = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Best Developer Award 2023',
      description: 'Recognized for outstanding contribution to web development',
      year: '2025',
      color: 'text-yellow-500'
    },
    {
      icon: Star,
      title: '99% Client Satisfaction',
      description: 'Maintained excellent client relationships across all projects',
      year: '2024',
      color: 'text-portfolio-primary'
    },
    {
      icon: Target,
      title: '50+ Projects Delivered',
      description: 'Successfully completed diverse projects across industries',
      year: '2024',
      color: 'text-portfolio-accent'
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Milestones that reflect my commitment to excellence and continuous growth 
            in the ever-evolving field of technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className={`inline-flex p-6 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors duration-300`}>
                    <Icon className={`w-12 h-12 ${achievement.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-portfolio-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {achievement.year.slice(-2)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold font-poppins mb-3 group-hover:text-portfolio-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in-up">
          <Link
            to="/achievements"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-portfolio-primary text-portfolio-primary rounded-full font-semibold hover:bg-portfolio-primary hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Award size={20} />
            <span>View All Achievements</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;
