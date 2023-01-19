import React from 'react';
import SodaLogos from './SodaLogos';
import SocialMediaLogos from './SocialMediaLogos';
import ImageGrid from './Imagegrid';
import images from './MasterLogoList' ;

const LevelOneLogos = () => {
  const keys = Object.keys(images)
  console.log(keys);
// This works as well
// const sodaImages = ['pepsi', 'fanta', 'sprite'].map((key) => images[key]);

  // const sodaImages = [images.pepsi, images.fanta, images.sprite]
  // const socialMediaImages = [images.facebook, images.snapchat, images.instagram, images.tumblr, images.twitter]

  console.log(images.snack)


  //Load logos into app
  const socialMediaImages = images.socialMedia.map(item => ({ key: 'social media', value: { url: item.url, answer: item.answer } }))
  const techImages = images.tech.map(item => ({ key: 'tech', value: { url: item.url, answer: item.answer } }))
  const sodaImages = images.soda.map(item => ({ key: 'soda', value: { url: item.url, answer: item.answer } }))
  const snackImages = images.snack.map(item => ({ key: 'snack', value: { url: item.url, answer: item.answer } }))
  // console.log(techImages)



  //Shuffle image order
  const allImages = [ ...socialMediaImages, ...techImages, ...sodaImages, ...snackImages];
  console.log(allImages)
  const shuffledImages = allImages.sort(() => Math.random() - 0.5);

  return (
    <div>
      <ImageGrid 
      images={shuffledImages} 
      />
    </div>
  );
};




export default LevelOneLogos;



// Old code
  
//   const sodaImages = ['https://logo.clearbit.com/pepsi.com', 
//   'https://logo.clearbit.com/gingerale.com',
//   'https://logo.clearbit.com/fanta.com',
//   'https://logo.clearbit.com/Sprite.com', 
// ];


  // return (
  //   <div  className="image-container">
  //     <SodaLogos images={sodaImages} />
  //     <SocialMediaLogos images={socialMediaImages} />
  //   </div>
  // );
