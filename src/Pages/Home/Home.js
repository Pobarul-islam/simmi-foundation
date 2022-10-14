import React from 'react';
import Banner from './Banner';
import MarqueeText from './MarqueeText';
import WelcomeSimmi from './WelcomeSimmi';

const Home = () => {
    return (
        <div className=''>
            <MarqueeText />
            <Banner />
            <WelcomeSimmi/>
        </div>
    );
};

export default Home;