import React from "react";
import TextSection from "./TextSection"; // Importing the TextSection component
import Quote from "../Quote"; // Importing the Quote component
import SocialMedia from "../SocialMedia"; // Importing the SocialMedia component

interface ContentProps {
  // Define props here if needed
}

const Content: React.FC<ContentProps> = (
  {
    /* destructure props here if needed */
  }
) => {
  // Add your component logic here

  return (
    <div>
      <TextSection /> {/* Render the TextSection component */}
      <Quote /> {/* Render the Quote component */}
      <SocialMedia /> {/* Render the SocialMedia component */}
    </div>
  );
};

export default Content;
