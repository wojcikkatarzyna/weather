import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather.jsx';
import CurrentDate from './components/CurrentDate.jsx';
import Hello from './components/Hello.jsx';

document.addEventListener('DOMContentLoaded', function() {
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                currDate : new Date(),
                backgroundColor : "white",
            }
        }

        componentDidMount() {
            this.intervalId = setInterval( () => {
                this.setState({
                    currDate : new Date(),
                    color: ((this.state.currDate.getHours() < 6) || (this.state.currDate.getHours() > 18)) ? 'white' : 'black',
                    backgroundColor : ((this.state.currDate.getHours() < 6) || (this.state.currDate.getHours() > 18)) ? 'rgb(6, 34, 159)' : 'lightblue'
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval( this.intervalId );
        }

        render(){
            return  <div className="main" style={{
                              backgroundColor: this.state.backgroundColor,
                              color: this.state.color
                            }}>
                        <Hello date={this.state.currDate}/>
                        <Weather />
                        <CurrentDate date={this.state.currDate}/>
                    </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

})
