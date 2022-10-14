import React from 'react';

const Objectives = () => {
  return (
    <div>
      <h2 className='mt-10 text-4xl font-bold'>Objective</h2>
      <div className="grid lg:grid-cols-4 px-10 pb-4 mt-20 gap-10  md:grid-cols-2">
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://simmifoundation.org/home/images/objectives/education.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://simmifoundation.org/home/images/objectives/livelihood.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://simmifoundation.org/home/images/objectives/healthcare.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://simmifoundation.org/home/images/objectives/women%20empowerment.jpg"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;