import React from 'react';
const Help = () => {
    return (
        <div className='mb-4'>
        
        <div
          className="min-h-screen hero gap-10"
          style={{
            backgroundImage: `url("https://simmifoundation.org/home/images/help-bg.png")`,
          }}
        >
          <div>
            <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
              <div className="card w-96  shadow-xl image-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold text-center text-orange-600">
                    Collaborate
                  </h2>
                  <span className="border border-slate-400 "></span>
                  <p>
                    Simmi Foundation serves in the collaboration with schools,
                    colleges and other institutions.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="text-2xl">Collaborate with us</button>
                  </div>
                </div>
              </div>
              <div className="card w-96  shadow-xl image-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold text-center text-orange-600">
                    Collaborate
                  </h2>
                  <span className="border border-slate-400 "></span>
                  <p>
                    Simmi Foundation serves in the collaboration with schools,
                    colleges and other institutions.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="text-2xl">Collaborate with us</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 shadow-xl image-full">
                <div className="card-body">
                  <h2 className="text-2xl font-bold text-center text-orange-600">
                    Collaborate
                  </h2>
                  <span className="border border-slate-400 "></span>
                  <p>
                    Simmi Foundation serves in the collaboration with schools,
                    colleges and other institutions.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="text-2xl">Collaborate with us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Help;