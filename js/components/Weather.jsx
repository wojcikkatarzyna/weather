import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            clouds : '',
            humidity : '',
            pressure : '',
            temp : '',
            rain : '',
            description: '',
            icon: '',
            windDeg: '',
            windSpeed: '',
        }
    }

    checkDirection = (windDeg) => {
      if ((windDeg > 45) && (windDeg < 135)) {
          var windDir = "east";
      } if ((windDeg > 135) && (windDeg < 225)) {
          var  windDir = "south";
      } if ((windDeg > 225) && (windDeg < 315)) {
          var  windDir = "west";
      } else {
          var  windDir = "north";
      }
      return windDir;
    }

    componentDidMount() {
      fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Katowice&APPID=c6d2e0b769c3721075c999ff5e9d495b`)
          .then( r => r.json() )
          .then( ans => {
              console.log(ans);
              console.log(ans.list[0].clouds.all);
              this.setState({
                  loading : false,
                  clouds : ans.list[0].clouds.all,
                  humidity : ans.list[0].main.humidity,
                  pressure : Math.floor(ans.list[0].main.pressure),
                  temp : Math.floor(ans.list[0].main.temp - 273.15),
                  description: ans.list[0].weather[0].description,
                  icon: "http://openweathermap.org/img/w/" + ans.list[0].weather[0].icon + ".png",
                  windDeg: ans.list[0].wind.deg,
                  windSpeed: ans.list[0].wind.speed,
              });
          } );
    }


    render(){
        if (this.state.loading) {
            return  <div>
                        Please, wait a minute...
                    </div>
        }
        return  <div className="weather">
                    <div className="icon">
                        <img src={this.state.icon}/>
                    </div>
                    <div className="temperature"> {this.state.temp} &#186;C</div>
                    <h3> Cloudiness: {this.state.clouds} % </h3>
                    <h3> Humidity: {this.state.humidity} % </h3>
                    <h3> Pressure: {this.state.pressure} hPa</h3>
                    <h3> Description: {this.state.description}</h3>
                    <h3> Wind: {this.state.windSpeed} m/s, {this.checkDirection(90)} </h3>
                </div>
    }
}

module.exports = Weather;
