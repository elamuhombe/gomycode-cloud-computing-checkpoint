import React from 'react';

interface QuoteProps {
  // Define props here if needed
}

const Quote: React.FC<QuoteProps> = ({ /* destructure props here if needed */ }) => {
  // Add your component logic here

  return (
    <div className='mt-48'>
      <div className='p-4 border-t-2 border-l-2 border-r-1 border-b-1 mb-20 shadow-xl'> {/* Added shadow-xl for box shadow */}
        <p className='bg-custom-900 text-white p-4'>"Uniting our community is akin to weaving a vibrant tapestry of empathy and cooperation, where every thread of diversity intertwines to create a masterpiece of harmony. In this inclusive space, barriers dissolve, and bonds strengthen, fostering an environment where collaboration and understanding flourish. Together, we stand resilient, facing challenges head-on, knowing that our collective spirit will guide us through adversity."</p>
      </div>
    </div>
  );
}

export default Quote;
