import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import Detail from './Detail';
import Header from './Header';

const data = [
      {month: 'January', democrat: 4000, republic: 2400},
      {month: 'February', democrat: 3000, republic: 1398},
      {month: 'March', democrat: 2000, republic: 4100},
      {month: 'April', democrat: 4780, republic: 2908},
      {month: 'May', democrat: 4890, republic: 1800},
      {month: 'June', democrat: 2390, republic: 3800},
      {month: 'July', democrat: 3490, republic: 4300}
];

class App extends Component {
  
  constructor(){
    super();
    this.state={};
  }  

  render(){           
    return <div>
    <Header />
    <Chart data={data}/>  
    <Detail detail={data}/>         
    </div>;    
  }
}

export default App;
