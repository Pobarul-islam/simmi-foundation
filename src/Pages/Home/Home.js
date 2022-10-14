import React from 'react';
import Banner from './Banner';
import Fundraisers from './Fundraisers';
import Help from './Help';
import MarqueeText from './MarqueeText';
import Objectives from './Objectives';
import UpEvents from './UpEvents';
import WelcomeSimmi from './WelcomeSimmi';

const Home = () => {
    return (
        <div className=''>
            <MarqueeText />
            <Banner />
            <WelcomeSimmi />
            <Objectives />
            <Help />
            <UpEvents />
            <Fundraisers/>
        </div>
    );
};

export default Home;