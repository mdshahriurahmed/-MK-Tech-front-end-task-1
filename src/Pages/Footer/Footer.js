import React from 'react';
import insta from '../Assets/logo-instagram-png-rond-6.png'
import fb from '../Assets/2021_Facebook_icon.svg.png'
import youtube from '../Assets/youtube-logo-icon-transparent---32.png'
import logo from '../Assets/c4528ee2a9ec3090fb77146d9882e55a.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content pl-28">
                <div>
                    <span class="footer-title text-secondary">We are social</span>
                    <h2>FOLLOW US</h2>
                    <div className='flex gap-3 pt-3'>
                        <div>
                            <img style={{ width: "30px" }} src={insta} alt="" />
                        </div>
                        <div>
                            <img style={{ width: "30px" }} src={fb} alt="" />
                        </div>
                        <div>
                            <img style={{ width: "45px" }} src={youtube} alt="" />
                        </div>
                    </div>
                    <img className='mt-5' style={{ width: "160px" }} src={logo} alt="" />
                </div>
                <div>
                    <span class="footer-title text-secondary">Links</span>
                    <Link to='/' class="link link-hover">ADVERTISERS</Link>
                    <Link to='/' class="link link-hover">PUBLISHERS</Link>
                    <Link to='/' class="link link-hover">INFLUENCERS</Link>
                    <Link to='/' class="link link-hover">AD FORMATS</Link>
                </div>
                <div>
                    <span class="footer-title text-secondary">Documentation</span>
                    <Link to='/' class="link link-hover">TERMS & CONDITIONS</Link>
                    <Link to='/' class="link link-hover">PRIVACY POLICY </Link>
                    <Link to='/' class="link link-hover">CANCELLATION POLICY</Link>
                    <Link to='/' class="link link-hover">BLOG
                    </Link>
                </div>
                <div>
                    <span class="footer-title text-secondary">Support</span>
                    <Link to='/' class="link link-hover">FAQ of use</Link>
                    <Link to='/' class="link link-hover">MEDIA KIT
                    </Link>
                    <Link to='/' class="link link-hover">CONTACT US</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;