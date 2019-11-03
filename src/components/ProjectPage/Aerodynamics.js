import React, { Component } from 'react'


import topdown from './../../img/aerodynamics/full-sim.png'
import render from './../../img/aerodynamics/aerodynamics.png';
import real from './../../img/aerodynamics/sawhorses.png';

import ProjectPage from './ProjectPage';

export class Aerodynamics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Aerodynamic Development"
            images={[topdown, render, real]}
            description=""
            />
        )
    }
}

export default Aerodynamics
