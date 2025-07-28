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

const Index = () => {
  // --- SEO & Page Metadata ---
  const pageTitle = "Abid Ali - Web and App Developer | Portfolio";
  const pageDescription = "+5 Years of experience and 50+ Web and App projects delivered by Abid Ali, a Professional Developer across US and UK featured by Infomistar and SMIT.";
  
  // <-- IMPORTANT: Replace with your actual live domain
  const canonicalUrl = "https://your-website.com"; 
  
  // <-- IMPORTANT: Replace with the full URL to your preview image
  const previewImageUrl = "https://your-website.com/og-preview.png"; 

  // --- Schema Markup (JSON-LD) ---
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Abid Ali",
        "url": canonicalUrl,
        "jobTitle": "Web and App Developer",
        "image": previewImageUrl, // Added image to person schema
        "sameAs": [
          // <-- IMPORTANT: Fill these with your actual profile URLs
          "https://www.linkedin.com/in/your-profile",
          "https://github.com/your-username",
          "https://twitter.com/your-username"
        ],
        "knowsAbout": ["Web Development", "App Development", "React", "Next.js", "JavaScript", "UI/UX Design"]
      },
      {
        "@type": "WebSite",
        "url": canonicalUrl,
        "name": pageTitle,
        "creator": { "@type": "Person", "name": "Abid Ali" },
        "publisher": { "@type": "Person", "name": "Abid Ali" },
        "description": pageDescription,
        "image": previewImageUrl // Added image to website schema
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'smooth' }}>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="author" content="Abid Ali" />
        <meta name="robots" content="index, follow" />

        {/* --- Open Graph / Facebook / LinkedIn --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={previewImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* --- Twitter Card --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={previewImageUrl} />

        {/* --- JSON-LD Schema --- */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

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
