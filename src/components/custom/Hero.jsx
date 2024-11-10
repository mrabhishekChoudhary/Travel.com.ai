import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 gap-6 md:gap-8 py-8 md:py-12 lg:py-16 xl:py-20">
      <h1 className="mt-10 md:mt-14 font-extrabold text-center leading-tight">
        <span className="text-[#3dce86] block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Discover Your Next Adventure with AI:
        </span>
        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Personalize Itineraries at Your Fingertips
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 text-center mb-5 max-w-xl">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      <div className='m-2'>
      <Link to="/create-trip">
        <Button>Get Started, It's Free</Button>
      </Link>
      </div>
      <img
        src="/mockupLanding.png"
        className="mt-[-40px] md:mt-[-20px] lg:mt-[-40px] max-w-full h-auto"
        alt="Mockup of landing page"
      />
    </div>
  );
}

export default Hero;
