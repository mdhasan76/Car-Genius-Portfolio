import React from 'react';
import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className='my-14'>
            <div className="hero">
                <div className="hero-content md:grid grid-cols-2">
                    <div className='relative  h-[550px] '>
                        <div className='h-4/5'>
                            <img src={img2} className="h-[460px] w-4/5 rounded-lg shadow-2xl" alt="/" />
                        </div>

                        <div>
                            <img src={img1} className="absolute bottom-0 right-0 border-8 rounded-lg shadow-2xl h-64" alt="/" />
                        </div>
                    </div>
                    <div className='p-7'>
                        <p className='text-lg text-orange-600 font-medium border-b-2 border-b-orange-700'>About Us</p>
                        <h1 className="text-5xl font-bold py-5">We are qualified and experienced in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;