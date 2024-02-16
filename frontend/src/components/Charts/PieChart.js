import React from 'react';
import { Pie } from 'react-chartjs-2';
const PieChart=(props)=>{
    return(
        <div>
            <h1>Pie Chart</h1>
            <Pie data={props.data} />
        </div>
    )   
}
export default PieChart;