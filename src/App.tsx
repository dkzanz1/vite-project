import React from 'react';
import Header from "./components/Header";
import './styles/App.css';
import HeroBar from '../src/components/HeroBar';
import CategoryBoxes from '../src/components/CategoryBoxes'
import GridGallery from '../src/components/GridGallery';
import Footer from '../src/components/Footer';

const App: React.FC = () => {
  return (
      <div className="App">
        <Header logoSrc="src/assets/images/image.png" logoAlt="logo" />        {/* login navbar */}
        {/* logo center with option navbar */}
        {/* hero photo with comment */}
        <HeroBar />
        {/* comment 3 boxes */}
        <CategoryBoxes />
        {/* card 1 of 4 across photos*/}
        {/* card 2 of 4 across photos*/}
        {/* card 3 of 4 across photos*/}
        {/* card 4 of 4 across photos*/}
        <GridGallery />
        {/* section one of two with two photos */}
        {/* section one of two with two photos */}
        {/* trendinh card 4 photos */}
        {/* two photo  */}
        {/* footer */}
        <Footer />
   
      </div>
  );
};

export default App
