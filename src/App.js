import React, {useState} from 'react'
import GlobalStyle from './globalStyles';
import Navbar from './component/Navbar';
import Dropdown from './component/Dropdown';
import InfoSection from './component/InfoSection';
import { InfoData } from './data/InfoData';
import Feature from './component/Feature';
import NewsLetter from './component/NewsLetter';
import Advertise from './component/Advertise';
import Footer from './component/Footer';


  


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
       <Navbar toggle={toggle}/> 
       <Dropdown isOpen={isOpen} toggle={toggle}/>
       <InfoSection {...InfoData} />
       <Feature />
       <NewsLetter />
       <Advertise />
       <Footer />
    </>
  );
}

export default App;
