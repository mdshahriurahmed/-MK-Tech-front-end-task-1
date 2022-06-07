import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tooglebtn.css'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../Assets/15-popup-ad-example.jpg'
import img2 from '../Assets/download.jpg'
import img3 from '../Assets/native-advertising-examples-post.png'
import img4 from '../Assets/download (1).jpg'

export class ToogleButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabType: 'pop-under'
        }
    }

    toogleMe = (value) => {
        this.setState({
            tabType: value
        })
    }

    render() {
        return (
            <div>
                <div className='grid jsutify-center justify-items-center  lg:justify-between  gap-5 lg:grid-cols-4 grid-cols-1'>
                    <button className='btn btn-natural b w-60  shadow-lg rounded-full' onClick={() => this.toogleMe('pop-under')}>POP-UNDER</button>
                    <button className='btn btn-natural b shadow-lg w-60 rounded-full' onClick={() => this.toogleMe('banner-ad')}>BANNER AD</button>
                    <button className='btn btn-natural b shadow-lg w-60 rounded-full' onClick={() => this.toogleMe('native')}>NATIVE</button>
                    <button className='btn btn-natural b shadow-lg w-60 b  rounded-full' onClick={() => this.toogleMe('skim')}>SKIM</button>
                </div>
                <div>
                    {
                        this.state.tabType === 'pop-under' && <div class="hero bg-accent mt-12">
                            <div class="hero-content flex-col lg:flex-row">
                                <img style={{ width: "300px" }} src={img1} />
                                <div className='lg:text-left ml-5'>
                                    <h1 class="text-5xl font-bold">POP-UNDER</h1>
                                    <p class="py-6">This is one of the most popular ads. After user’s click, this
                                        ad opens landing page in behind. So, the user experience is
                                        not hampered much.
                                    </p>
                                    <Link className='text-secondary text-xl' to='/'>Learn More <span className='ml-2'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></Link>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        this.state.tabType === 'banner-ad' && <div class="hero bg-accent mt-12">
                            <div class="hero-content flex-col lg:flex-row">
                                <img style={{ width: "300px" }} src={img2} />
                                <div className='lg:text-left ml-5'>
                                    <h1 class="text-5xl font-bold">BANNER AD</h1>
                                    <p class="py-6">Choose between the available banner formats. Highly
                                        effective ad for visibility</p>
                                    <Link className='text-secondary text-xl' to='/'>Learn More <span className='ml-2'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></Link>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        this.state.tabType === 'native' && <div class="hero bg-accent mt-12">
                            <div class="hero-content flex-col lg:flex-row">
                                <img style={{ width: "300px" }} src={img3} />
                                <div className='lg:text-left ml-5'>
                                    <h1 class="text-5xl font-bold">NATIVE</h1>
                                    <p class="py-6">Ad format with the image and the title, that perfectly fits into
                                        the content of the site.
                                        Native ads are placed in the most visible areas of the page
                                        and, thus, this format shows good results and the level of
                                        interaction.</p>
                                    <Link className='text-secondary text-xl' to='/'>Learn More <span className='ml-2'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></Link>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        this.state.tabType === 'skim' && <div class="hero bg-accent mt-12">
                            <div class="hero-content flex-col lg:flex-row">
                                <img style={{ width: "300px" }} src={img4} />
                                <div className='lg:text-left ml-5'>
                                    <h1 class="text-5xl font-bold">SKIM</h1>
                                    <p class="py-6">SKIM" is a link that a publisher inserts on a specific site
                                        element, and after clicking on it, an advertisement appears
                                        to the user.
                                        SKIM gives 100% control of your sold traffic amount, higher
                                        CR to advertisers and CPM rates to publishers.</p>
                                    <Link className='text-secondary text-xl' to='/'>Learn More <span className='ml-2'><FontAwesomeIcon icon={faUpRightFromSquare} /></span></Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        )
    }


}


