import React from 'react';

const WelcomeSimmi = () => {
    return (
      <div className=" bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{height: "450px", width: "350px"}} src="https://simmifoundation.org/home/images/home/map-dark.png" />
          <div>
            <h1 className="text-5xl font-bold text-white">
              Welcome to <span className="text-orange-500">SIMMI</span>
            </h1>
            <p className="py-6 text-white">
              Smart India Multi Management Institute is a pan India NGO
              registered in Haryana, India; carrying out welfare projects on
              education, healthcare, livelihood and women empowerment. We
              believe that unless members of the civil society are involved
              proactively in the process of development, sustainable change will
              not happen. Based on this, Simmi Foundation sensitizes and engages
              the civil society, making it an active partner in all its welfare
              initiatives.
            </p>
            
          </div>
        </div>
      </div>
    );
};

export default WelcomeSimmi;