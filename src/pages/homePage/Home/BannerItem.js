import React from 'react';

const BannerItem = ({ data }) => {
    const { img, id, next, prev } = data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={img} className="w-full  object-cover" alt='/' />
            <div className="absolute transform -translate-y-1/2 top-1/2 text-white p-24 bg-gradient-to-r from-slate-800 h-full">
                <div className='md:max-w-xl'>
                    <h1 className='text-6xl font-bold leading-[70px]'>
                        Affordable <br /> Price for Car <br /> Servicing
                    </h1>
                    <p className='py-7 '>There are many variations of passages of  available, But the majority have suffered alteration in some form</p>
                    <div>
                        <a href="/" className="btn btn-outline btn-error mr-5">Discover More</a>
                        <a href="/" className="btn btn-outline btn-error ">Letest Project</a>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <div>
                    <a href={`#slide${prev}`} className="btn btn-circle  hover:bg-orange-600 hover:border-orange-600">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle ml-3 hover:bg-orange-600 hover:border-orange-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;