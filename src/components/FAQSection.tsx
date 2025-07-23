
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, javascript, TypeScript, Node.js, React Native for mobile apps, and non coding platforms like WordPress, Shofify, and Wix. I also work with databases, APIs, and modern design frameworks."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. I provide detailed timelines during the planning phase and keep you updated throughout the process."
    },
    {
      id: 3,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, We offer ongoing support and maintenance packages to ensure your application stays updated, secure, and performs optimally. This includes bug fixes, security updates, and feature enhancements."
    },
    {
      id: 4,
      question: "Can you work with my existing team?",
      answer: "Absolutely! I'm experienced in collaborating with existing development teams, designers, and stakeholders. I can integrate seamlessly into your workflow and communication processes. Additionlly, we are also wrking as an agency where we had an entire team of developers, designer, graphics and non-technical such as SEO, SMM, Blogging, and , more..."
    },
    {
      id: 5,
      question: "What's your development process like?",
      answer: "I follow an agile approach with regular communication and updates. The process includes discovery, planning, design, development, testing, and deployment. You'll receive regular progress updates and have opportunities to provide feedback throughout."
    },
    {
      id: 6,
      question: "Do you handle both frontend and backend development?",
      answer: "Yes, I'm a full-stack developer experienced in both frontend and backend development. I can handle everything from user interfaces to server logic, databases, and API integrations."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-slate-800">
            Frequently <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Asked </span> <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? Here are the most common ones I receive from clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="mb-4 bg-white rounded-xl shadow-md overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              {openFAQ === faq.id && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
