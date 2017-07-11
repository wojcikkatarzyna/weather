import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Katowice&APPID=c6d2e0b769c3721075c999ff5e9d495b`)
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
