import React, { useState, useEffect } from 'react';
import MasterLogoList from './MasterLogoList';

const GuessForm = ({ closePopup, imageUrl, logoList }) => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  // Use effect hook that listens for changes in the currentImage state variable
  useEffect(() => {
    // Reset the guess state variable when the currentImage state variable changes
    setGuess('');
    setResult('')
  }, [imageUrl]);

  const handleSubmit = (event) => {
    event.preventDefault();

  


    let logoObject;
    for (const category of Object.values(logoList)) {
      logoObject = category.find(logo => logo.url === imageUrl);
      if (logoObject) {
        break;
      }
    }

    // Get the correct answer from the matching logo object
    const answer = logoObject ? logoObject.answer : '';

    setResult(guess.toLocaleLowerCase() === answer ? 'Correct!' : 'Incorrect');


    
    // setResult(guess.toLocaleLowerCase() === key ? 'Correct!' : 'Incorrect');
  };

  return (
    <div className="popup-form">
      <form onSubmit={handleSubmit}>
        <label className="guess-form-label">
          Enter your guess: 
          <input type="text" value={guess} className= "guess-form-input" onChange={(event) => setGuess(event.target.value)} />
        </label >
        <input type="submit" value="Submit" className="submit-button"/>
      </form>
      {result && <div className="result">{result}</div>}
      <button onClick={closePopup}>Close</button>
      <img src={imageUrl} alt="" className="guess-form-image"/>
    </div>
  );
};

export default GuessForm;



// old tests

// Search throught logolist (which is MasterLogoList as a prop) for the key to the given URL.
    // This url will be whichver is associated with the clicked imageUrl. And the "key" to this url "value" is the correct answer.

    // const key = Object.keys(logoList).find(key => logoList[key] === imageUrl);
    // console.log('key = '+ key)
    // console.log(imageUrl)

    //Testing for correct format for tech logos
    
    // console.log(imageUrl)
    // const testKey = logoList.find(logo => logo.url === imageUrl);
    // const testAnswer = testKey ? testKey.answer : '';

    // console.log(testKey)
    // console.log(testAnswer)
    // setResult(guess.toLocaleLowerCase() === testAnswer ? 'Correct!' : 'Incorrect');