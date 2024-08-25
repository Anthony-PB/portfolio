import React from 'react';
import "./s-components/Small.css";
import playlist from "../images/playlist.png";
import coc from "../images/coc.png"
import a4 from "../images/a4Pic.png"
import inv from "../images/invaders.png"
import ProjectEntry from './s-components/ProjectEntry';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

//ProjectEntry:
//props.lang, props.title, props.link, props.image, props.git, props.desc, props.id

const Projects = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        setTimeout(() => {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
        }
    }, [location]);
    return( 
    <div>
        <h2>Projects</h2>
        <ProjectEntry
            id="MRP"
            desc="A Clash Of Clans Trivia Survey"
            link="https://replit.com/@Anthony-PB/Clash-Of-Clans-Trivia-Survey"
            git="https://github.com/Anthony-PB/flw2-trivia-23-24-starter/tree/main"
            title="#1 | COC Trivia"lang="CSS, HTML, and JavaScript(Utilizes React.js)" image= {coc}/>
        <ProjectEntry
            id=""
            desc="A playlist that displays the names, artists, covers, and links to the youtube videos of the songs on it."
            link="https://replit.com/@Anthony-PB/FLW-02P-Unit-Project-Playlist-Light"
            git="https://github.com/Anthony-PB/FLW-02.P-Unit-Project-Playlist-Light-.git"
            title="#2 | Playlist"lang="CSS, HTML, and JavaScript" image= {playlist}/>
        <ProjectEntry
            id="MCP"
            desc="An application that evaluates postfix formulas in spreadsheets saved in CSV format."
            //link = ""
            git="https://github.com/Anthony-PB/a4-super"
            title="#3 | Formula Evaluation"lang="Java" image= {a4}/>
        <ProjectEntry
            id=""
            desc="A Space Invaders Clone"
            //link = ""
            git="https://github.com/Anthony-PB/ubiquitous-fiesta"
            title="#4 | Invaders"lang="Python" image= {inv}/>
    </div>
    )
};

export default Projects