import React from 'react';
import logo from '../Assets/c4528ee2a9ec3090fb77146d9882e55a.png'

const MainHeader = () => {
    return (
        <div className='flex justify-between px-5 pt-10'>
            <div>
                <img style={{ width: "250px" }} src={logo} alt="" />
            </div>
            <div>
                <h5 className=' text-start font-medium'><span className='text-success'>BN</span>   /  <span>EN</span></h5>
            </div>
        </div>
    );
};

export default MainHeader;