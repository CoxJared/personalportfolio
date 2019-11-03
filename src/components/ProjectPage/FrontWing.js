import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import frontwingimg from './../../img/aerodynamics/new wing.png'
import fronwingcut from './../../img/front wing/shiny.png';
import frontwingstream from './../../img/front wing/front-wing-streamlines.png';
import frontwingiso from './../../img/front wing/iso.png';



export class FrontWing extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <ProjectPage
            title="Front Wing Development and Analysis"
            images={[frontwingimg, fronwingcut, frontwingstream, frontwingiso]}
            description="" />
        )
    }
}

export default FrontWing
