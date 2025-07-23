
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-poppins text-gradient mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              I'm passionate about creating innovative web and mobile applications that make a difference. 
              Let's collaborate and bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:abidali129418@gmail.com"
                className="px-6 py-3 bg-portfolio-primary rounded-lg hover:bg-portfolio-primary/80 transition-colors font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-slate-300 hover:text-white transition-colors">
                  My Work
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/hire" className="text-slate-300 hover:text-white transition-colors">
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy;2025 abid ali web Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
