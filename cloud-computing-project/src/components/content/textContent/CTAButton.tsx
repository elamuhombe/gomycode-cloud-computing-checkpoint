import React from 'react';

// Define props interface for CTAButton component
interface CTAButtonProps {
  text: string; // Button text
  onClick: () => void; // Click event handler
}

// Define CTAButton functional component
const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    // Button element with Tailwind CSS classes for styling
    <button className="cta-button text-white mt-4 bg-custom-gray py-4 px-6 rounded-full hover:bg-custom-400" onClick={onClick}>
      {text} {/* Display the text passed as props */}
    </button>
  );
};

// Export the CTAButton component as default
export default CTAButton;
