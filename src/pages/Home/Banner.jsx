import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperStyles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {

    const slidesData = [
        { _id: 1, imgURL: "https://i.ibb.co/tqrYc2d/Image.png", title: "Title 1", description: "Short Description 1 to website" },
        { _id: 2, imgURL: "https://i.ibb.co/tqrYc2d/Image.png", title: "Title 2", description: "Short Description 2 to website" },
        { _id: 3, imgURL: "https://i.ibb.co/tqrYc2d/Image.png", title: "Title 3", description: "Short Description 3 to website" },
        { _id: 4, imgURL: "https://i.ibb.co/tqrYc2d/Image.png", title: "Title 4", description: "Short Description 4 to website" },
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
                    delay: 3500,
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
                        <div className='h-full w-full flex items-center justify-center flex-col bg-sky-50'>
                            <img src={slide.imgURL} alt="" />
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
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