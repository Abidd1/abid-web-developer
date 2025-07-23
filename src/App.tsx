
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Hire from "./pages/Hire";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet-async";

// Operation Area
const AboutPage: React.FC = () => {
  const pageTitle = "abid ali web developer and designer";
  const pageDescription = "Learn more about our team and mission.";
  const canonicalUrl = "https://your-website.com/about"; // Replace with your actual domain and path

  return (
    <div>
      <Helmet>
        <title>{pageTitle}abid ali - Web and App Developer</title> {/* Good practice to include brand name */}
        <meta name="description" content={"+5 Years of experience and 50+ Web and App projects deliverd by Abid Ali, a Professional Developer across US and UK featured by Infomistar and SMIT."} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${pageTitle} | Designer`} />
        <meta property="og:description" content={"abid ali, Web, App Developer and Designer with +5 years of experience and 50+ projects deliverd. 98% of Clients satisfaction rate across different  continents "} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="abid ali - Web and App Developer | Desigenr" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="abid ali - Web and App Developer | Designer with +5 years of experience and 50+ projects deliverd with 98% of Clients satisfaction rate across different  continents " /> {/* Example of a different card type */}
        <meta name="twitter:title" content={`${pageTitle} | Designer `} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>About Us</h1>
      <p>This page provides information about our company.</p>
      {/* ... rest of your about page content */}
    </div>
  );
};




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hire" element={<Hire />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
