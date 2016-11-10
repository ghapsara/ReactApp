import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class Chart extends Component {   
  render(){            
    return <div>  
    <LineChart width={600} height={400} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="month"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="democrat" stroke="#0288d1" activeDot={{r: 4}}/>
       <Line type="monotone" dataKey="republic" stroke="#db4437" activeDot={{r: 4}}/>
      </LineChart>
    </div>;
  }
}
