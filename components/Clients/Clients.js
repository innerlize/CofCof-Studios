import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import ClientsStyles from './Clients.module.scss';


function objToArrayLogos(logos) {

    let newLogosArray = [];

    for (let property in logos) {
        newLogosArray.push((logos[property]));
    }

    return newLogosArray;
}

export default function Clients() {

    const [logos, setLogos] = useState([]);


    useEffect(() => {
        const getLogos = async () => {
            try {
                const { data: logos} = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/logos.json${process.env.NEXT_PUBLIC_API_KEY}`);

                setLogos(objToArrayLogos(logos))
            }

            catch (error) {
                console.log('Error! D:')
            }
        }

        getLogos();
    }, [])


    return (
        <section className={ClientsStyles.section}>
            <div className={ClientsStyles.container}>
                <div>
                    <h3 className={ClientsStyles.title}>Thanks for your trust!</h3>
                    <p className={ClientsStyles.desc}>We are devoted to creating innovative gaming and entertainment experiences for our partners.</p>
                </div>

                <Swiper
                    breakpoints={{
                        // when window width is >= 0
                        0: {
                            slidesPerView: 3
                        },

                        // when window width is >= 768
                        768: {
                            slidesPerView: 4
                        },

                        // when window width is >= 1020
                        1020: {
                            slidesPerView: 7
                        }
                    }}
                    slidesPerView="auto"
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
                    {
                        logos.map(logo => {
                            return (
                                <SwiperSlide className={ClientsStyles.logo_container} key={logo.link_media} >
                                    <Image src={`https://${logo.link_media}`} width={60} height={60} alt="logo" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <Swiper
                    breakpoints={{
                        // when window width is >= 0
                        0: {
                            slidesPerView: 3
                        },

                        // when window width is >= 768
                        768: {
                            slidesPerView: 4
                        },

                        // when window width is >= 1020
                        1020: {
                            slidesPerView: 7
                        }
                    }}
                    slidesPerView="auto"
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
                    {
                        logos.map(logo => {
                            return (
                                <SwiperSlide className={ClientsStyles.logo_container} key={logo.link_media} >
                                    <Image src={`https://${logo.link_media}`} width={60} height={60} alt="logo" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}