// src/utils/emailService.ts

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  requirements: string;
}

export const sendFormToEmail = async (formData: FormData, formType: string) => {
  // Your Web3Forms access key
  // KEEP THIS KEY SECURE. If this is a client-side only application,
  // it's exposed, but for simple contact forms, Web3Forms allows this.
  // For higher security, consider using a backend API route to proxy the request.
  const accessKey = "adbaaba9-48cc-4e76-bf08-b88b9319b855";

  // Web3Forms endpoint
  const web3FormsEndpoint = "https://api.web3forms.com/submit";

  const dataToSend = {
    access_key: accessKey,
    subject: `New ${formType} inquiry from ${formData.name}`, // Dynamic subject for easy identification
    ...formData, // Spreads all your form data fields
    // You can add additional fields here that aren't in your form but you want to send:
    // "Form Submitted From": window.location.href,
  };

  try {
    const response = await fetch(web3FormsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", // Important for Web3Forms to return JSON
      },
      body: JSON.stringify(dataToSend),
    });

    const result = await response.json();

    if (!response.ok) {
      // If the response status is not OK (e.g., 400, 500), throw an error
      console.error("Web3Forms submission error:", result);
      // Web3Forms often returns a 'message' field for errors
      throw new Error(result.message || "Failed to send form inquiry. Please try again.");
    }

    // You can inspect the 'result' object here if needed, it contains success status from Web3Forms
    console.log("Web3Forms submission successful:", result);
    return result; // Return the success result
  } catch (error) {
    console.error("Error during form submission to Web3Forms:", error);
    throw error; // Re-throw to be caught by the component's try-catch block
  }
};
