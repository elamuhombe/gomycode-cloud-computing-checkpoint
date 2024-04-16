import React from 'react';
import CTAButton from './CTAButton';

interface TextSectionProps {
  // Define props here if needed
}

const TextSection: React.FC<TextSectionProps> = ({ /* destructure props here if needed */ }) => {
  // Add your component logic here

  return (
    <div>
      <h1 className='text-3xl font-bold'>Bring Your Community Together</h1>
      <p>In a world where digital interactions increasingly shape our social landscapes, it's essential to foster a sense of unity and belonging within our communities. Whether it's through online platforms, local gatherings, or shared interests, bringing your community together creates a space for connection, collaboration, and support.</p>
      <CTAButton text='Get Started' onClick={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default TextSection;
