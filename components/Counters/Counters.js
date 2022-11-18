import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountersStyles from './Counters.module.css';



function getCategories(projects, checkedProjects) {

    const cofcofProjects = checkedProjects.cofcof;

    let allProjectsData = []

    let allCofCofProjects = [];
    let checkedCofCofProjects = [];

    let projectsCounter = 0;
    let moviesCounter = 0;
    let gamesCounter = 0;
    let othersCounter = 0;


    // --------------------------------------------------------

    for (let property in projects) {
        allProjectsData.push((projects[property]));
    }

    for (let property in cofcofProjects) {
        allCofCofProjects.push((cofcofProjects[property]));
    }


    // --------------------------------------------------------

    allCofCofProjects.map(cofcofProject => {
        if (cofcofProject[Object.keys(cofcofProject)[0]].checked === true) {
            checkedCofCofProjects.push(cofcofProject[Object.keys(cofcofProject)[0]].nombre_proyecto);
            projectsCounter += 1;
        }
    })


    // --------------------------------------------------------

    allProjectsData.map(projectData => {
        if (checkedCofCofProjects.includes(projectData[Object.keys(projectData)[0]].nombre_proyecto) && projectData[Object.keys(projectData)[0]].categoria === 'Movie') {
            moviesCounter += 1;
        }

        else if (checkedCofCofProjects.includes(projectData[Object.keys(projectData)[0]].nombre_proyecto) && projectData[Object.keys(projectData)[0]].categoria === 'Game') {
            gamesCounter += 1;
        }

        else if (checkedCofCofProjects.includes(projectData[Object.keys(projectData)[0]].nombre_proyecto) && projectData[Object.keys(projectData)[0]].categoria === 'Other') {
            othersCounter += 1;
        }
    })


    // --------------------------------------------------------

    const allCounters = [projectsCounter, moviesCounter, gamesCounter, othersCounter]
    const newArray = [allCounters, allProjectsData, checkedCofCofProjects]

    return newArray;
}

export default function Counters() {

    const [projects, setProjects] = useState([]);
    const [checkedProjects, setCheckedProjects] = useState([]);

    const [counterProjects, setCounterProjects] = useState();
    const [counterMovies, setCounterMovies] = useState();
    const [counterGames, setCounterGames] = useState();
    const [counterOthers, setCounterOthers] = useState();


    useEffect(() => {

        const getCofcofProjects = async () => {
            try {
                const { data: projectss } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/proyectos.json${process.env.NEXT_PUBLIC_API_KEY}`);
                const { data: cofcofProjectss } = await axios.get(`https://porfolio-b6670-default-rtdb.firebaseio.com/pagina_proyecto.json${process.env.NEXT_PUBLIC_API_KEY}`);

                const array = getCategories(projectss, cofcofProjectss)
                setProjects(array[1])
                setCheckedProjects(array[2])

                setCounterProjects(array[0][0])
                setCounterMovies(array[0][1])
                setCounterGames(array[0][2])
                setCounterOthers(array[0][3])
            }

            catch (error) {
                console.log('Error! D:')
            }
        }

        getCofcofProjects();
    }, [])


    return (
        <section className={CountersStyles.section}>
            <h3 className={CountersStyles.title}>We never stop <span>creating</span>.</h3>
            <div className={CountersStyles.all_counters_container}>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>{counterMovies}</p>
                    <p className={CountersStyles.category}>Movies</p>
                </div>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>{counterProjects}</p>
                    <p className={CountersStyles.category}>Projects</p>
                </div>
                <div className={CountersStyles.counter_container}>
                    <p className={CountersStyles.number}>{counterGames}</p>
                    <p className={CountersStyles.category}>Games</p>
                </div>
            </div>
        </section>
    )
}