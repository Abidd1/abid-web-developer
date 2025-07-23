
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Award, Briefcase, UserCheck, Menu, X, PenBox } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Me', icon: User },
    { path: '/achievements', label: 'Achievements', icon: Award },
    { path: '/work', label: 'My Work', icon: Briefcase },
    { path: '/Blog', label: 'Blog', icon: PenBox },
    { path: '/hire', label: 'Hire Me', icon: UserCheck },
  ];

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/60 backdrop-blur-md shadow-lg py-4 border-b border-white/10'
          : 'bg-white/40 backdrop-blur-sm py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold font-poppins text-gradient hover:scale-105 transition-transform duration-300"
          >
            abid ali
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20',
                    isActive
                      ? 'bg-portfolio-primary text-white shadow-lg'
                      : 'text-foreground hover:text-portfolio-primary'
                  )}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      
                      return (
                        <SheetClose asChild key={item.path}>
                          <Link
                            to={item.path}
                            onClick={handleMobileNavClick}
                            className={cn(
                              'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300',
                              isActive
                                ? 'bg-portfolio-primary text-white shadow-lg'
                                : 'text-foreground hover:bg-gray-100'
                            )}
                          >
                            <Icon size={20} />
                            <span className="font-medium text-lg">{item.label}</span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
