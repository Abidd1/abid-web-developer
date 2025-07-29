import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // <--- 1. Import this

// Wrap your App component with the HelmetProvider
createRoot(document.getElementById("root")!).render(
  <HelmetProvider> {/* <--- 2. Add the provider wrapper */}
    <App />
  </HelmetProvider>
);
