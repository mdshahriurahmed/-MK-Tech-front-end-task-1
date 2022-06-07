import React from 'react';
import ad from '../Assets/unnamed.jpg'

const Section1 = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse  ">
                <img className='rounded-lg shadow-lg' style={{ width: "500px" }} src={ad} />
                <div className='lg:text-left '>
                    <h1 class="text-5xl font-bold text-secondary">Get more from your ads.</h1>
                    <p class="py-6">Get the most value for every impression, deliver better experiences, and manage your entire ads business from one easy-to-use, integrated platform.</p>

                </div>
            </div>
        </div>
    );
};

export default Section1;