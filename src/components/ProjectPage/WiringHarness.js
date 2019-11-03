import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import wiringharness from './../../img/WiringHarness/original.png';
import wiringtopview from './../../img/WiringHarness/top-view.png';
import wiringfronview from './../../img/WiringHarness/front-view.png';
import justwires from './../../img/WiringHarness/nervous.png';
import wiringtable from './../../img/WiringHarness/wiring-table.png';


export class WiringHarness extends Component {
    render() {
        return (
            <ProjectPage 
            title="Wiring Harness Model and Routing"
            images={[wiringharness, wiringtopview, wiringfronview, justwires, wiringtable]}
            description="The wiring harness model was developed to provide an general plan for routing throughout the vehicle, ensuring that all the neccessary connections are accounted for and all rules - regarding the position of high voltage wiring - were satisfied.  I created the model in solidworks "
            />
        )
    }
}

export default WiringHarness
