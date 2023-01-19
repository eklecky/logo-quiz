import logo from './logo.svg';
import axios from 'axios';
import TestLogos from './TestLogos';
import LevelOneLogos from './LevelOneLogos';


import Navbar from './NavBar';
import Home from './Home';


function App() {
  
  
  return (
    <div className="App">
      <Navbar />
     {/* <div className="content">
      <Home />
     </div> */}
     <div className="logo">
     <LevelOneLogos />
     {/* <TestLogos companyName="barstoolsports.com" /> */}
     </div>
    </div>
  );
}

export default App;
