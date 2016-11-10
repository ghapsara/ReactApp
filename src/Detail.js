import React, {Component} from 'react';

const listStyleDem={    
    background: '#0288d1',
    height : 130,
    width : 200,
    margin: 10
};
const listStyleRep={    
    background: '#db4437',
    height : 130,
    width : 200,
    margin: 10
};

export default class Detail extends Component{
    getData(){        
        return this.props.detail;
    }

    getdemocratVoteAverage(){
        var arr = this.getData();        
        return (arr.reduce( ( p, c ) => p + c.democrat, 0 ) / arr.length).toFixed(2);    
    }
    getrepublicVoteAverage(){
        var arr = this.getData();        
        return (arr.reduce( ( p, c ) => p + c.republic, 0 ) / arr.length).toFixed(2);        
    }
    render(){
        return <div>
        <h3>Vote Average</h3>
         <ul className="list-inline" style={{color:'white'}}>
            <li style={listStyleDem}>
            <h4>DEMOCRAT</h4>
            <h1>{this.getdemocratVoteAverage()}</h1>
            </li>               
            <li style={listStyleRep}>
            <h4>REPUBLIC</h4>
            <h1>{this.getrepublicVoteAverage()}</h1>
            </li>
        </ul>                                
        </div>;
    }
}