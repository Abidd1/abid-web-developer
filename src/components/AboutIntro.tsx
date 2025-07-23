
import { Code, Smartphone, User } from 'lucide-react';

const AboutIntro = () => {
  return (
    <section id="about-intro" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-slate-800">
            About <span className="bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hola, I'm abid ali, a passionate Web and App developer and Designer with a love for creating innovative solutions that bridge the gap 
            between imagination and reality. With expertise in modern technologies and a keen eye for design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="relative">
              <figure>
                <img
                src="./Assets/about_abid_ali_web_developer_and_designer.webp"
                alt="About abid ali Web and App developer "
                title='Know About abid ali web developer'
                aria-describedby='Introduction and about info of abid ali web developer and designer'
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <figcaption>About info of Professional Developer abid ali</figcaption>
              </figure>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold font-poppins mb-6 text-slate-800">
              Transforming Ideas Into Digital Reality
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 5 years of experience in web and App development, I specialize in creating 
              scalable applications using cutting-edge technologies. My approach combines technical 
              expertise with creative problem-solving to deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-yellow-100 border hover:shadow-lg transition-shadow">
                <div className="p-3 bg-yellow-200 rounded-lg">
                  <Code className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-800">Web Development</h4>
                  <p className="text-sm text-slate-600">
                    Modern web applications using React, Next.js, TypeScript and Javascript.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-yellow-100 border hover:shadow-lg transition-shadow">
                <div className="p-3 bg-yellow-200 rounded-lg">
                  <Smartphone className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-slate-800">Mobile Apps</h4>
                  <p className="text-sm text-slate-600">
                    Cross-platform mobile solutions with React Native
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'React Native', 'WordPress', 'Shofify'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium border hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
