import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import axios from 'axios';
import WorksStyles from './Works.module.scss';


function getCheckedProjects(projects) {

    const cofcofProjects = projects.cofcof;

    let allCofCofProjects = [];
    let checkedCofCofProjects = [];

    for (let property in cofcofProjects) {
        allCofCofProjects.push((cofcofProjects[property]));
    }

    // --------------------------------------------------------

    allCofCofProjects.map(cofcofProject => {
        if (cofcofProject[Object.keys(cofcofProject)[0]].checked === true) {
            checkedCofCofProjects.push(cofcofProject);
        }
    })

    return checkedCofCofProjects;
}

function getProjectsCovers(covers) {

    const projectsCovers = [];

    for (let property in covers) {
        projectsCovers.push((covers[property]));
    }

    return projectsCovers;
}

function getFirstProjectCover(covers, projects) {
    let firstCover = covers.find(cover => cover.nombre_proyecto === Object.values(projects[0])[0].nombre_proyecto)

    return firstCover.link_media;
}

function getFirstProjectName(projects) {
    let firstProjectName = Object.values(projects[0])[0].nombre_proyecto;

    return firstProjectName;
}

function getProjectData(projectName, projectsData) {
    const projects = [];

    for (let property in projectsData) {
        projects.push((projectsData[property]))
    }

    let data = projects.find(project => Object.values(project)[0].nombre_proyecto === projectName);
    
    return data;
}

function getProjectEmbed(projectData) {

    let embed = Object.values(projectData)[0].embebido;
    
    return embed;
}

function getProjectMedia(projectName, projectMedia) {
    let media;

    for (let property in projectMedia) {
        if (property === projectName) {
            media = (Object.values(projectMedia[property]));
        }
    }

    return media;
}


export default function Works() {

    const [checkedProjects, setCheckedProjects] = useState([]);
    const [projectsCovers, setProjectsCovers] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [projectData, setProjectData] = useState();
    const [projectEmbed, setProjectEmbed] = useState('');
    const [projectMedia, setProjectMedia] = useState([]);
    const [demoViewer, setDemoViewer] = useState(false);
    const [imageView, setImaveView] = useState('');
    const [bigCover, setBigCover] = useState('');


    useEffect(() => {
        const getProjects = async () => {
            try {
                const { data: projectsData } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/proyectos.json${process.env.NEXT_PUBLIC_API_KEY}`);
                const { data: projectsMedia } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/media_proyecto.json${process.env.NEXT_PUBLIC_API_KEY}`);
                const { data: CofcofProjects } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/pagina_proyecto.json${process.env.NEXT_PUBLIC_API_KEY}`);
                const { data: covers } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/portada_proyecto.json${process.env.NEXT_PUBLIC_API_KEY}`);

                setCheckedProjects(getCheckedProjects(CofcofProjects));
                setProjectsCovers(getProjectsCovers(covers));
                setBigCover(`https://${getFirstProjectCover(getProjectsCovers(covers), getCheckedProjects(CofcofProjects))}`);
                setProjectData(getProjectData(projectName, projectsData));
                setProjectEmbed(getProjectEmbed(getProjectData(projectName, projectsData)));
                // setProjectData(getProjectData(getFirstProjectName(getCheckedProjects(CofcofProjects)), projectsData));
                setProjectMedia(getProjectMedia(projectName, projectsMedia))
            }

            catch (error) {
                console.log('Error! D:', error);
            }
        }

        getProjects();
    }, [projectName])


    return (
        <section className={WorksStyles.section} id='works'>

            <div className={WorksStyles.poster_container}>
                <Image src={bigCover} fill alt='cover' sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />

                {/* Carousel for projects. When you click in one of them, the project poster changes
                and the data displays to the user in the "Info-container" from below. */}
                <div className={WorksStyles.projects_carousel_container}>
                    <p>PROJECTS</p>

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
                        {
                            checkedProjects.map(project => {
                                return projectsCovers.map(cover => {
                                    if(cover.nombre_proyecto === Object.values(project)[0].nombre_proyecto) {
                                        return (
                                            <SwiperSlide onClick={(e) => setProjectName(cover.nombre_proyecto)} className={WorksStyles.swiper_slide} key={project.nombre}>
                                                <div>
                                                    <Image onClick={(e) => setProjectMedia([])} src={`https://${cover.link_media}`} fill alt="image" sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                    })
                                })
                        }
                    </Swiper>
                </div>
            </div>

            <div className={WorksStyles.info_container}>
                <div className={WorksStyles.pad}></div>

                {projectData ? <h4>{Object.values(projectData)[0].nombre_proyecto_mostrar}</h4> : null}
                {/* <h4>Spider-Man: No Way Home</h4> */}

                <div className={WorksStyles.init_info_container}>
                    <div>
                        <p>Client</p>
                        {projectData ? <p>{Object.values(projectData)[0].cliente}</p> : null}
                    </div>

                    <div>
                        <p>Date</p>
                        <p>
                            {projectData ? Object.values(projectData)[0].fecha_inicio : null}
                            <br />
                            {projectData ? Object.values(projectData)[0].fecha_fin : null}
                        </p>
                    </div>

                    <div>
                        <p>Softwares</p>
                        {projectData ? <p>{Object.values(projectData)[0].software}</p> : null}
                    </div>
                </div>

                <p className={WorksStyles.desc}>{projectData ? Object.values(projectData)[0].descripcion : null}</p>

                <div>
                    {projectEmbed ? <div className={WorksStyles.video} dangerouslySetInnerHTML={{ __html:  projectEmbed}}></div> : null}

                    {/* Carousel for project's images/demos below the project's video. */}
                    <div className={WorksStyles.project_images_carousel_container}>
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
                                    slidesPerView: 4,
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
                            {
                                projectMedia
                                
                                    ?
                                
                                projectMedia.map(media => {
                                    if (media.cofcof === true) {
                                        return (
                                            <SwiperSlide className={WorksStyles.swiper_gallery_slide} key={media.nombre_proyecto}>
                                                <div onClick={(e) => setDemoViewer(!demoViewer)}>
                                                    <Image src={`https://${media.link_media}`} onClick={(e) => setImaveView(`https://${media.link_media}`)} fill alt='project image demo' sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw" />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    }
                                })

                                :

                                null
                            }
                        </Swiper>
                    </div>
                </div>
            </div>

            
            <div className={demoViewer ? [WorksStyles.image_view_container, WorksStyles.activated].join(" ") : WorksStyles.image_view_container} onClick={(e) => setDemoViewer(!demoViewer)}>
                <div>
                    <Image className={WorksStyles.image_view} src={imageView} fill alt='image demo view' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
        </section>
    )
}