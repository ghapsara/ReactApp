import React, {Component} from 'react';

const headerStyle={
    marginTop:30,
    marginBottom:20    
};

export default class Header extends Component{
    render(){
        return <div className="text-center" style={headerStyle}>
        <h2>US Vote Election Visualization</h2>
        </div>;
    }
}