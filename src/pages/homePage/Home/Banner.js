import React from 'react';
import slider1 from '../../../assets/images/banner/1.jpg'
import slider2 from '../../../assets/images/banner/2.jpg'
import slider3 from '../../../assets/images/banner/3.jpg'
import slider4 from '../../../assets/images/banner/4.jpg'
import slider5 from '../../../assets/images/banner/5.jpg'
import slider6 from '../../../assets/images/banner/6.jpg'
import BannerItem from './BannerItem';

const Banner = () => {
    const coruselData = [
        {
            img: slider1,
            prev: 6,
            id: 1,
            next: 2,
        },
        {
            img: slider2,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            img: slider3,
            prev: 2,
            id: 3,
            next: 4,
        },
        {
            img: slider4,
            prev: 3,
            id: 4,
            next: 5,
        },
        {
            img: slider5,
            prev: 4,
            id: 5,
            next: 6,
        },
        {
            img: slider6,
            prev: 5,
            id: 6,
            next: 1,
        },
    ]
    return (
        <div className="carousel w-full h-[600px] rounded-2xl mb-10">
            {
                coruselData.map(corusel => <BannerItem data={corusel} key={corusel.id} />)
            }
        </div>
    );
};

export default Banner;