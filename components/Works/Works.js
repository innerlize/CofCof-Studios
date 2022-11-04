import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import WorksStyles from './Works.module.css';


export default function Works() {
    return (
        <section className={WorksStyles.section} id='works'>
            <div className={WorksStyles.poster_container}>
                <Image src='/Poster2.webp' fill />

                {/* Carousel for projects. When you click in one of them, the project poster changes
                and the data displays to the user in the "Info-container" from below. */}
                <div className={WorksStyles.projects_carousel_container}>
                    <Swiper
                        breakpoints={{
                            // when window width is >= 0
                            0: {
                                slidesPerView: 4
                            },

                            // when window width is >= 768
                            768: {
                                slidesPerView: 6,
                                spaceBetween: 18
                            },

                            // when window width is >= 1020
                            1020: {
                                slidesPerView: 4,
                                spaceBetween: 30
                            }
                        }}
                        slidesPerView="auto"
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        navigation={{
                        }}
                        className={WorksStyles.swiper}
                    >
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className={WorksStyles.info_container}>
                <div className={WorksStyles.pad}></div>

                <h4>Spider-Man: No Way Home</h4>

                <div className={WorksStyles.init_info_container}>
                    <div>
                        <p>Client</p>
                        <p>Marvel Studios</p>
                    </div>

                    <div>
                        <p>Date</p>
                        <p>
                            10/13/2020
                            <br />
                            12/13/2021
                        </p>
                    </div>

                    <div>
                        <p>Softwares</p>
                        <p className={WorksStyles.softwares}>3ds Max, Maya, Blender, Nuke</p>
                    </div>
                </div>

                <p className={WorksStyles.desc}>With Spider-Man&apos;s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man. <br /> <br /> Peter Parker&apos;s secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.</p>

                <div>
                    <iframe className={WorksStyles.video} width="853" height="480" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="SPIDER-MAN: NO WAY HOME - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    {/* Carousel for project's images/demos below the project's video. */}
                    <Swiper
                        breakpoints={{
                            // when window width is >= 0
                            0: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },

                            // when window width is >= 768
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15
                            },

                            // when window width is >= 1020
                            1020: {
                                slidesPerView: 5,
                                spaceBetween: 20
                            }
                        }}
                        slidesPerView="auto"
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        navigation={{
                        }}
                        className={WorksStyles.swiper_gallery}
                    >
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Thumbnail.jpg' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' fill />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}