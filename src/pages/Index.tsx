
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutIntro from '@/components/AboutIntro';
import WorkPreview from '@/components/WorkPreview';
import ClientReviews from '@/components/ClientReviews';
import FAQSection from '@/components/FAQSection';
import AchievementsPreview from '@/components/AchievementsPreview';  
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';


// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali - Web and Developer | Designer";
  const pageDescription = "+5 Years of experience and 50+ Web and App projects deliverd by Abid Ali, a Professional Developer across US and UK featured by Infomistar and SMIT.";
  const canonicalUrl = "https://your-website.com/about"; // Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle} | Portfolio </title> {/* Good practice to include brand name */}
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} | Portfolio `} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="+5 Years of experience and 50+ Web and App projects deliverd by Abid Ali, a Professional Developer across US and UK featured by Infomistar, Code Voyagers, and SMIT." /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} | Portfolio`} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Navigation />
      <HeroSection />
      <AboutIntro />
      <WorkPreview />
      <ClientReviews />
      <FAQSection />
      <AchievementsPreview />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
