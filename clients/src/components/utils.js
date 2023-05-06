// utils.js

// Function to format dates
export function formatDate(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = `${d.getMonth() + 1}`.padStart(2, '0');
    const day = `${d.getDate()}`.padStart(2, '0');
    const hours = `${d.getHours()}`.padStart(2, '0');
    const minutes = `${d.getMinutes()}`.padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  
  // Function to validate email addresses
  export function isValidEmail(email) {
    // Regular expression to match email address format
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }
  
  // Function to calculate the area of a rectangle
  export function calculateArea(length, width) {
    return length * width;
  }

  export const formatCurrency = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  };
  
  