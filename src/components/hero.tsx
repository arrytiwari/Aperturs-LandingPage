import React from 'react';
import {imhero} from "../assets"
export const Hero = () => {
  return (
    <div className='w-full  px-16 py-10 flex justify-between'>
        <div className=' px-10 py-20 mt-5 w-1/2 ml-10 flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>
                Virtual Health For You
            </h1>
            <p className='text-xl text-gray-500 font-regular'>
                just testing soemthing else will be types over here, lets just makes sure that it will exceed 2 lines so it will be better for testing
            </p>
            <div>
            <button className='px-6 py-2  bg-blue-400 hover:bg-blue-500 font-regular text-white rounded-lg'>
                Consult Today
            </button>
            </div>
        </div>
        <img src={imhero.src} alt="gitu" className="w-[693px] h-[598px]" >
        </img>
    
    </div>
  );
};
