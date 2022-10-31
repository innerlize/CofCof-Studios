import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import WorksStyles from './Works.module.css';


export default function Works() {
    return (
        <section className={WorksStyles.section}>
            <div className={WorksStyles.poster_container}>
                <Image src='/Poster3.png' fill />

                <div className={WorksStyles.projects_carousel_container}>
                    <Swiper
                        slidesPerView={4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        navigation={{
                        }}
                        className={WorksStyles.swiper}
                    >
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster3.png' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster.jpg' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
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
                        <p>3ds Max, Maya, Blender, Nuke</p>
                    </div>
                </div>

                <p className={WorksStyles.desc}>With Spider-Man&apos;s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man. <br /> <br /> Peter Parker&apos;s secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.</p>

                <div>
                    <iframe className={WorksStyles.video} width="853" height="480" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="SPIDER-MAN: NO WAY HOME - Official Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        watchSlidesProgress={true}
                        modules={[Navigation]}
                        navigation={{
                        }}
                        className={WorksStyles.swiper_gallery}
                    >
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster3.png' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster.jpg' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                        <SwiperSlide className={WorksStyles.swiper_gallery_slide}>
                            <Image src='/Poster2.webp' width={50} height={50} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}