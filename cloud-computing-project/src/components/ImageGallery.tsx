import React from "react";


// Define the interface for props if needed
interface ImageGalleryProps {
  // Add props here if necessary
}

// Define the ImageGallery functional component
const ImageGallery: React.FC<ImageGalleryProps> = ({}) => {
  return (
    // Outer grid container with 2 columns, 4 columns on medium screens, and a gap of 4 units between elements. Added ml-16 for left margin.
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-16 mt-4">
      {/* First column grid */}
      <div className="grid gap-4">
        {/* Individual image divs */}
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image01.avif"
            alt="woman-and-boy-in-beach"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image02.avif"
            alt="man-typing"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image03.avif"
            alt="virtual-reality"
          />
        </div>
      </div>
      {/* Second column grid */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image04.avif"
            alt="lady-in-tour"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image05.avif"
            alt="people-in-meeting"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image07.avif"
            alt="man-in-snow"
          />
        </div>
      </div>
      {/* Third column grid */}
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image08.avif"
            alt="ladies-sharing"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image09.avif"
            alt="hands-together"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="images/image06.avif"
            alt="lady-with-snacks"
          />
        </div>
      </div>
    </div>
  );
};

// Export the ImageGallery component as default
export default ImageGallery;
