import Image from 'next/image';
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
                    modules={[Autoplay]}
                    className="mySwiper"
                    loop={true}
                    style={{marginBottom: '40px'}}
                >
                    <SwiperSlide>
                        <Image src='/Logo1.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo2.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo3.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo4.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo5.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo6.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo7.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo8.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo9.png' width={60} height={60} />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    loop={true}
                    dir="rtl"
                >
                    <SwiperSlide>
                        <Image src='/Logo3.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo1.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo4.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo6.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo2.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo8.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo5.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo9.png' width={60} height={60} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/Logo7.png' width={60} height={60} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}