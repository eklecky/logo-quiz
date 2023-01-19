import React from 'react';

const SodaLogos = (props) => {
    const { images } = props;
  
    return (
      <div>
        {images.map((imageUrl) => (
          <img src={imageUrl} alt="Soda" key={imageUrl} className='logo' />
        ))}
      </div>
    );
  };
export default SodaLogos;