import React from 'react';
import img1 from '../Assets/1.png'
import img2 from '../Assets/2.png'
import img3 from '../Assets/3.png'

const Section2 = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-4xl text-secondary mt-0 font-semibold'>AVAILABLE FOR EVERYONE</h1>
            <p className='text-xl font-regular mt-1'>Purchase Your Advertisment Service</p>

            <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 justify-between justify-items-center mt-20'>

                <div class="card w-80 bg-accent flex flex-col justify-center items-center ">
                    <div class="card-body">
                        <div class="bg-white w-48 rounded-full h-48 flex justify-center items-center shadow-lg">
                            <img style={{ width: "100px" }} src={img1} alt="" />
                        </div>

                        <h1 className='text-2xl mt-3 font-bold '>Run Ad Campaign</h1>

                        <button class="btn btn-active btn-secondary text-white text-xl font-light mt-8 rounded-full shadow-lg">Purchase</button>
                    </div>
                </div>
                <div class="card w-80 bg-accent flex flex-col justify-center items-center">
                    <div class="card-body">

                        <div class="bg-white w-48 rounded-full h-48 flex justify-center items-center shadow-lg">
                            <img style={{ width: "100px" }} src={img2} alt="" />
                        </div>
                        <h1 className='text-2xl mt-3 font-bold '>Run Telegram Ad</h1>

                        <button class="btn btn-active btn-secondary text-white text-xl font-light mt-8 rounded-full shadow-lg">Purchase</button>
                    </div>
                </div>
                <div class="card w-80 bg-accent flex flex-col justify-center items-center">
                    <div class="card-body">
                        <div class="bg-white w-48 rounded-full h-48 flex justify-center items-center shadow-lg">
                            <img style={{ width: "100px" }} src={img3} alt="" />
                        </div>
                        <h1 className='text-2xl mt-3 font-bold '>Audience Target Plan </h1>

                        <button class="btn btn-active btn-secondary text-white text-xl font-light mt-8 rounded-full shadow-lg">Purchase</button>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Section2;