import React from 'react';
import { Button } from '../ui/button';  // Ensure the Button component is correctly styled
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center px-5 sm:px-10 md:px-20 lg:px-40 xl:px-56 gap-6 md:gap-9 py-12">  
      <h1 className="mt-20 font-extrabold text-center leading-tight">
        <span className="text-[#3dce86] block text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px]">
          Discover Your Next Adventure with AI:
        </span>
        <span className="block text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px]">
          Personalize Itineraries at Your Fingertips
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-500 text-center mb-5">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      <Link to="/create-trip">
        <Button>Get Started, It's Free</Button>  {/* Add a comma for better clarity */}
      </Link>
      <img
        src="/mockupLanding.png"
        className="mt-[-50px]"
      />
    </div>
  );
}

export default Hero;
