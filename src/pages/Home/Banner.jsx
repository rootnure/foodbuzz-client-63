import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperStyles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {

    const slidesData = [
        { _id: 1, imgURL: "https://i.ibb.co/GsCBJmB/Image.png" },
        { _id: 2, imgURL: "https://i.ibb.co/DWzX5K3/Image.png" },
        { _id: 3, imgURL: "https://i.ibb.co/d7ZsghY/Image.png" },
        { _id: 4, imgURL: "https://i.ibb.co/5nx8hpJ/Image.png" },
        { _id: 5, imgURL: "https://i.ibb.co/RPcFHQQ/Image.png" },
        { _id: 6, imgURL: "https://i.ibb.co/HHVPQPL/Image.png" },
        { _id: 7, imgURL: "https://i.ibb.co/TkPFtNZ/Image.png" },
        { _id: 8, imgURL: "https://i.ibb.co/3Rf4fPt/Image.png" },
        { _id: 9, imgURL: "https://i.ibb.co/yWHs9zC/Image.png" },
        { _id: 10, imgURL: "https://i.ibb.co/VH4tq4B/Image.png" },
    ]

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.round(time / 1000)}s`;
    };
    return (
        <section className="h-96">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {/* slides */}
                {
                    slidesData.map(slide => <SwiperSlide key={slide._id}>
                        <div className="h-full w-full flex items-center justify-center flex-col bg-cover" style={{ backgroundImage: `url("${slide.imgURL}")` }}>
                            <img src={slide.imgURL} alt="Slider Image" className='h-56' />
                            <div className="bg-green-50 p-x-40 p-4 rounded-lg flex flex-col items-center">
                                <h2 className='text-xl font-bold'>Get the best from Foodbuzz</h2>
                                <Link to="/allFood"><button className="btn btn-primary">All Menu</button></Link>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/* slider timer left */}
                <div className="autoplay-progress" slot="container-end">
                    <svg className='' viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default Banner;