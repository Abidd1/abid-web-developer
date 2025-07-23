
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Building2, Calendar, CheckCircle, ExternalLink, Linkedin, Globe, Facebook } from 'lucide-react';

const ClientReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "S Tatheer Hussain",
      position: "CEO & Founder",
      company: "Peaks & Plans.",
      avatar: "Assets/S_Tatheer_Hussain.webp",
      review: "Abid delivered our e-commerce platform transformation that exceeded all expectations. Our conversion rate improved by 35% within the first month, and the attention to detail in user experience design made all the difference. Professional, reliable, and truly understands modern web development.",
      rating: 5,
      project: "E-commerce Platform Redesign",
      duration: "3 months",
      industry: "Travel agency",
      metrics: "35% increase in conversions",
      location: "Peshawar, KP",
      verified: true,
      companyWebsite: "https://infomistar.blogspot.com",
      linkedIn: "#",
      testimonialDate: "December 2024"
    },
    {
      id: 2,
      name: "Awais Khan",
      position: "Product Manager",
      company: "InnovateCorp",
      avatar: "Assets/Awais_khan.webp",
      review: "Outstanding mobile app development work by Abid. The React Native solution delivered exactly what we needed - one codebase for both iOS and Android. User engagement increased by 42% after launch. His technical expertise and communication throughout the project was exceptional.",
      rating: 5,
      project: "Cross-Platform Mobile App",
      duration: "4 months",
      industry: "FinTech Solutions",
      metrics: "42% boost in user engagement",
      location: "London, UK",
      verified: true,
      companyWebsite: "https://eduiqhub.com",
      linkedIn: "#",
      testimonialDate: "August 2024"
    },
    {
      id: 3,
      name: "Aira Surkiz",
      position: "Marketing Director",
      company: "GrowthLabs",
      avatar: "Assets/DP.webp",
      review: "The marketing dashboard Abid developed revolutionized how we track campaigns. Real-time analytics and beautiful data visualization helped us optimize our ROI by 28%. The project was delivered on schedule with regular updates. Highly recommend his services.",
      rating: 5,
      project: "Analytics Dashboard",
      duration: "2 months",
      industry: "Digital Marketing",
      metrics: "28% ROI improvement",
      location: "Austin, TX",
      verified: true,
      companyWebsite: "abid-gamma.vercel.app",
      linkedin: "https://www.linkedin.com",
      testimonialDate: "October 2024"
    },
    {
      id: 4,
      name: "Muhammad Ali",
      position: "Chief Technology Officer",
      company: "Herboilguide.com",
      avatar: "Assets/Rumi.webp",
      review: "Abid made complex data visualization simple and intuitive. The performance optimization work reduced our dashboard load times by 60%. His excellent technical skills combined with clear communication throughout the project made this collaboration seamless.",
      rating: 5,
      project: "Data Visualization Platform",
      duration: "5 months",
      industry: "Data Analytics",
      metrics: "60% faster load times",
      location: "Seattle, WA",
      verified: true,
      companyWebsite: "https://herboilguide.com",
      linkedIn: "https://linkedin.com",
      testimonialDate: "May 2025"
    },
    {
      id: 5,
      name: "Sara Noreen",
      position: "Founder & Medical Director",
      company: "HealthTech Innovations",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      review: "The HIPAA-compliant patient portal Abid delivered was flawless. The security implementation was thorough, and the user interface is intuitive for both patients and healthcare providers. This reduced our administrative overhead by 40% and improved patient satisfaction significantly.",
      rating: 5,
      project: "Healthcare Patient Portal",
      duration: "6 months",
      industry: "Healthcare Technology",
      metrics: "40% reduction in admin work",
      location: "Boston, MA",
      verified: true,
      companyWebsite: "#",
      linkedIn: "#",
      testimonialDate: "August 2023"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-slate-800">
            Client <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success <span className="text-gradient">Stories</span></span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who've transformed their businesses with custom solutions.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Review Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in border border-slate-100">
            {/* Client Profile Section - At the top */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 px-8 py-8 border-b border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{reviews[currentReview].company}</h4>
                    <p className="text-slate-600 text-sm">{reviews[currentReview].industry} • {reviews[currentReview].location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{reviews[currentReview].duration}</span>
                  </div>
                  {reviews[currentReview].verified && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Verified Client</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Client Profile Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-blue-50"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 text-xl">{reviews[currentReview].name}</h4>
                    <p className="text-slate-600 text-lg">{reviews[currentReview].position}</p>
                    <p className="text-blue-600 text-sm font-medium">{reviews[currentReview].company}</p>
                    <p className="text-slate-500 text-xs mt-1">{reviews[currentReview].testimonialDate}</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-2">
                  <a href={reviews[currentReview].linkedIn} target="_blank" rel="noopener noreferrer" 
                     className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </a>
                  <a href={reviews[currentReview].companyWebsite} target="_blank" rel="noopener noreferrer"
                     className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                    <Globe className="w-4 h-4 text-slate-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Review Content Section - At the bottom */}
            <div className="p-8 md:p-12 relative">
              <div className="absolute top-6 left-6 text-blue-100 opacity-50">
                <Quote size={48} />
              </div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  <div className="flex mr-3">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500 font-medium">5.0 • Verified Review</span>
                </div>

                {/* Project title */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {reviews[currentReview].project}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                  "{reviews[currentReview].review}"
                </blockquote>

                {/* Results metric */}
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">Key Result: {reviews[currentReview].metrics}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600 border border-slate-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600 border border-slate-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-blue-600 scale-125 shadow-lg'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600 text-sm">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-slate-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">12h</div>
            <div className="text-slate-600 text-sm">Avg Response Time</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-slate-600 text-sm">On-Time Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
