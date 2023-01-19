import { useState } from "react";

import GuessForm from "./GuessForm";

import MasterLogoList from "./MasterLogoList";


const ImageGrid = (props) => {
    const { images } = props;
    console.log(images)

    const [showPopup, setShowPopup] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    
    const handleImageClick = (imageUrl) => {
        setCurrentImage(imageUrl);
        setShowPopup(true);
      };


    const closePopup = () => {
        setShowPopup(false);
      };
  
    return (
        <div>
        {images.map(({value }) => (
          // console.log(value),
          // console.log(value.url),
          <img src={value.url} className="logo" alt="" onClick={() => handleImageClick(value.url)}/>
        ))}
        {showPopup && <GuessForm closePopup={closePopup} 
        imageUrl={currentImage}
        logoList={MasterLogoList}
        // {... console.log(Object.keys(MasterLogoList))}
        />}
        
      </div>
    );
};
  export default ImageGrid;