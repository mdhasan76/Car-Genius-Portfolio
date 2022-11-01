import React from 'react';
import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'
import slider5 from '../../../assets/images/banner/5.jpg'
import slider6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-2xl mb-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full  object-cover" alt='/' />
                <div className="absolute transform -translate-y-1/2 top-1/2 text-white p-24 bg-gradient-to-r from-slate-800">
                    <div className='md:max-w-xl'>
                        <h1 className='text-6xl font-bold leading-[70px]'>
                            Affordable <br /> Price for Car <br /> Servicing
                        </h1>
                        <p className='py-7 '>There are many variations of passages of  available, But the majority have suffered alteration in some form</p>
                        <div className=''>
                            <a href="/" className="btn btn-outline btn-error mr-5">Discover More</a>
                            <a href="/" className="btn btn-outline btn-error ">Letest Project</a>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <div>
                        <a href="#slide4" className="btn btn-circle  hover:bg-orange-600 hover:border-orange-600">❮</a>
                        <a href="#slide2" className="btn btn-circle ml-3 hover:bg-orange-600 hover:border-orange-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" alt='/' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" alt='/' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" alt='/' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;