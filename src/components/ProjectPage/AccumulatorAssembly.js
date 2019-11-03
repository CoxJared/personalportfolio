import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import fullrender from './../../img/accumulatorassembly/full-accumulator.png';
import topview from './../../img/accumulatorassembly/topview.png'
import attachment from './../../img/accumulatorassembly/disasembled.png';
import air from './../../img/accumulatorassembly/AIR screenshot.png';
import screenshot from './../../img/accumulatorassembly/assembly-screenshot.png'


export class AccumulatorAssembly extends Component {
    render() {
        return (
            <ProjectPage
            title="Accumulator Assembly"
            images={[fullrender, topview, attachment, air,screenshot]}
            description=""
            />
        )
    }
}

export default AccumulatorAssembly
