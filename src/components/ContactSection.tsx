import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// The import for sendFormToEmail is now removed.

const ContactSection = () => {
  // Your state and handleChange function are perfect and remain unchanged.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- UPDATED handleSubmit FUNCTION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create the payload for Web3Forms
      const payload = {
        ...formData,
        access_key: "adbaaba9-48cc-4e76-bf08-b88b9319b855", // Your same Web3Forms Access Key
        subject: `New Contact Message from ${formData.name}: ${formData.subject}`,
        from_name: "Portfolio Contact Section",
      };

      // Send data to Web3Forms API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        // Use your existing toast for success
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        // Reset the form on success
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Use your existing toast for errors from the API
        console.error("Form submission error:", result);
        toast({
          title: "Error sending message",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      // Use your existing toast for network errors
      console.error("An error occurred:", error);
      toast({
        title: "Error sending message",
        description: "A network error occurred. Please try again later.",
        variant: "destructive"
      });
    } finally {
      // Re-enable the button
      setIsSubmitting(false);
    }
  };

  // Your JSX is perfect and does not need any changes.
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear about your ideas and 
            discuss how we can bring them to life together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold font-poppins mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-portfolio-primary/20 rounded-lg">
                  <Phone className="w-6 h-6 text-portfolio-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-300">+92 324 4422129</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-portfolio-secondary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-portfolio-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-300">abidali129418@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 bg-portfolio-accent/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-portfolio-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-300">Dir Upper, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-portfolio-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-portfolio-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-portfolio-primary focus:outline-none transition-colors"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-portfolio-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-portfolio-primary text-white rounded-lg font-semibold hover:bg-portfolio-primary/80 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
