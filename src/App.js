import React from 'react';
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import Image from './components/Image';
import Text from './components/Text';
import CircleAnim from './components/CircleAnim';
import BannerAnim from './components/BannerAnim';

function App() {
  return (
    <>
        <div className="container">
            <Header />
            <h1 className="main-heading">Animations in React using GSAP</h1>
            <Loader />
            <Image />
            <Text />
            <CircleAnim />
            <BannerAnim />
        </div>
    </>
  );
}

export default App;
