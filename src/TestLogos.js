import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const API_KEY = `pk_85f407edf9a589015481a1f024383842`;

const TestLogos = (props) => {
  // const [logo, setLogo] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://cors-anywhere-herokuapp.com/https://logo.clearbit.com`, {
  //     params: {
  //       domain: props.companyName,
  //       size: '512x512',
  //       api_key: API_KEY
  //     }

  //   }).then(response => {
  //     console.log(response.status)
  //     setLogo(response.config.url);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }, [props.companyName]
  // );

  // return (
  //   <img src={logo} alt={`${props.companyName} logo`} />
  // );


  const { imageType } = props;
  let imageUrl;

  switch (imageType) {
    case 'Pepsi':
      imageUrl = 'https://logo.clearbit.com/Pepsi.com';
      break;
    case 'Spirit':
      imageUrl = 'https://logo.clearbit.com/Spirit.com';
      break;
    case 'Delta':
      imageUrl = 'https://logo.clearbit.com/Delta.com';
      break;
    default:
      imageUrl = 'https://logo.clearbit.com/segment.com';
  }

  return (
    <img src={imageUrl} alt="Company" />
  );
};


export default TestLogos;