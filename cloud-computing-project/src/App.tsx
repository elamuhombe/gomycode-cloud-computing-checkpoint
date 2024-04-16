import React from "react";

// Importing necessary components
import Content from "./components/content/textContent/Content"; // Importing the Content component
import ImageGallery from "./components/ImageGallery"; // Importing the ImageGallery component
import RainbowIcon from "./components/RainbowIcon"; // Importing the RainbowIcon component
import Map from "./components/Map"; // Importing the Map component

// Define the App functional component
const App: React.FC = () => {
  return (
    <div className="ml-28"> {/* Apply left margin */}
      <div className="flex flex-row mt-4"> {/* Flex container with margin-top */}
        <div className="flex-1"> {/* Flex item taking half of the available space */}
          <RainbowIcon /> {/* Render the RainbowIcon component */}
          <Content /> {/* Render the Content component */}
        </div>
        <div className="flex-1"> {/* Flex item taking half of the available space */}
          <ImageGallery /> {/* Render the ImageGallery component */}
        </div>
      </div>
      <Map /> {/* Render the Map component */}
    </div>
  );
};

export default App; // Export the App component as default
