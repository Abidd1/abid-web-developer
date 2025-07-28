interface FormData {
  name: string;
  email: string;
  subject?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  requirements?: string;
  message?: string;
}

export const sendFormToEmail = async (formData: FormData, formType: 'contact' | 'hire' = 'contact') => {
  // Using EmailJS or similar service would be ideal, but for now we'll use a simple mailto
  // In a real application, you'd want to use a backend service or EmailJS
  
  const subject = encodeURIComponent(
    formType === 'hire' 
      ? `New Project Inquiry from ${formData.name}` 
      : `Contact Form: ${formData.subject || 'New Message'}`
  );
  
  let body = `Name: ${formData.name}\n`;
  body += `Email: ${formData.email}\n`;
  
  if (formData.company) body += `Company: ${formData.company}\n`;
  if (formData.projectType) body += `Project Type: ${formData.projectType}\n`;
  if (formData.budget) body += `Budget: ${formData.budget}\n`;
  if (formData.timeline) body += `Timeline: ${formData.timeline}\n`;
  if (formData.subject) body += `Subject: ${formData.subject}\n`;
  
  body += `\nMessage/Description:\n${formData.message || formData.description || ''}\n`;
  
  if (formData.requirements) {
    body += `\nRequirements:\n${formData.requirements}\n`;
  }
  
  const encodedBody = encodeURIComponent(body);
  const mailtoLink = `mailto:abidali129418@gmail.com?subject=${subject}&body=${encodedBody}`;
  
  // Open mailto link
  window.open(mailtoLink, '_blank');
  
  return true;
};
