import React from 'react';

const Map: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-8 mb-4'>
      <h2 className='text-xl font-bold text-center'>Visit us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127674.07694704083!2d34.738168599999995!3d-0.07497285000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1712672051115!5m2!1sen!2ske"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
