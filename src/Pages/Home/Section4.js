import React from 'react';
import './Section4.css'

const Section4 = () => {
    return (
        <div className='bg-secondary py-10 px-5'>
            <h1 className='text-4xl text-white mt-0 font-semibold'>SUMMARY</h1>
            <div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 lg:justify-between  justify-center justify-items-center mt-20'>


                    <div class=" b1 bg-white w-80 rounded-full h-80 flex flex-col justify-center items-center shadow-lg">
                        <h1 className='text-7xl font-medium text-white'>1 BN+</h1>
                        <br />
                        <h4 className='text-white text-3xl mt-2'>Daily Impressions</h4>
                    </div>




                    <div class=" bg-white w-80 rounded-full h-80 flex flex-col  justify-center items-center shadow-lg">
                        <h1 className='text-7xl font-medium text-secondary'>$500K+</h1>
                        <h4 className='text-secondary text-3xl mt-5'>Paid</h4>
                    </div>



                    <div class="b2 bg-primary w-80 rounded-full h-80 flex flex-col  justify-center items-center shadow-lg">
                        <h1 className='text-7xl font-medium text-white'>8K+</h1>
                        <h4 className='text-white text-3xl mt-5'>Global Publishers</h4>
                    </div>



                </div>




            </div>

        </div>
    );
};

export default Section4;