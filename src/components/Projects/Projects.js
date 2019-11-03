import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.jpg';
import aerodynamicThumbnail from './../../img/aerodynamics/thumbnail.png';
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import frontwingThumbnail from './../../img/aerodynamics/new wing.png';
import assemblyThumbnail from './../../img/accumulatorassembly/full-accumulator.png';

import temp from './../../img/project/aerodynamic-thumbnail.png';

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"Wiring Harness",
                type:"modelling",
                thumbnail:wireharnessThumbnail,
                link:"/wiringharness"},
                
                {name:"Team Website",
                type:"website",
                link:"https://macformularacing.com/",
                thumbnail:websiteThumbnail},
                {name:"Front-wing Analysis",
                type:"modelling",
                thumbnail:frontwingThumbnail,
                link:"/frontwing"},
                {name:"Aerodynamic Development",
                type:"modelling",
                thumbnail:aerodynamicThumbnail,
                link:"/aerodynamics"},
                {name:"Accumulator Assembly",
                type:"modelling",
                thumbnail:assemblyThumbnail,
                link:"/accumulatorassembly"},
                // {name:"Monocoque Analysis",
                // type:"modelling",
                // thumbnail:temp}
                
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    project={project}
                    />
                </div>))}   
                <div className="projects-project-link-container"/>
                         
            </div>
        )
    }
}

export default Projects
