import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk`)
          .then( r => r.json() )
          .then( ans => {
              console.log(ans);
          } );
        }

    render(){
        return  <div> Hello World </div>
    }
}

module.exports = Weather;
