import React from 'react';
import Banner from './Banner';
import Help from './Help';
import MarqueeText from './MarqueeText';
import Objectives from './Objectives';
import WelcomeSimmi from './WelcomeSimmi';

const Home = () => {
    return (
        <div className=''>
            <MarqueeText />
            <Banner />
            <WelcomeSimmi />
            <Objectives />
            <Help/>
        </div>
    );
};

export default Home;