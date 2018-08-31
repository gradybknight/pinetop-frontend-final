import React from "react";
import {AreaChart} from 'react-easy-chart';

const GraphArea = props => {
    
    
    return (
    <div>
        <AreaChart
            // xType={'time'}
            axes
            grid
            verticalGrid
            lineColors={['blue']}
            areaColors={['blue']}
            // interpolate={'cardinal'}
            width={750}
            height={250}
            yDomainRange={[0,100]}
            data={props.graphData}
        />
    </div>
)}

export default GraphArea;