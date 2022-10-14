import React from 'react';
import Banner from './Banner';
import MarqueeText from './MarqueeText';
import Objectives from './Objectives';
import WelcomeSimmi from './WelcomeSimmi';

const Home = () => {
    return (
        <div className=''>
            <MarqueeText />
            <Banner />
            <WelcomeSimmi />
            <Objectives/>
        </div>
    );
};

export default Home;