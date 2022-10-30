import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import ClientsStyles from './Clients.module.css';


export default function Clients() {
    return (
        <section className={ClientsStyles.section}>
            <div className={ClientsStyles.container}>
                <div>
                    <h3 className={ClientsStyles.title}>Thanks for your trust!</h3>
                    <p className={ClientsStyles.desc}>We are devoted to creating innovative gaming and entertainment experiences for our partners.</p>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    style={{marginBottom: '40px'}}
                >
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'red'}}>Slide 1</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'green'}}>Slide 2</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'blue'}}>Slide 3</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'violet'}}>Slide 4</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'yellow'}}>Slide 5</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'grey'}}>Slide 6</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'pink'}}>Slide 7</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'purple'}}>Slide 8</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'lightblue'}}>Slide 9</SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'red'}}>Slide 1</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'green'}}>Slide 2</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'blue'}}>Slide 3</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'violet'}}>Slide 4</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'yellow'}}>Slide 5</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'grey'}}>Slide 6</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'pink'}}>Slide 7</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'purple'}}>Slide 8</SwiperSlide>
                    <SwiperSlide style={{width: '60px', height: '60px', backgroundColor: 'lightblue'}}>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}