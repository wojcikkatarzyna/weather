import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather.jsx';
import CurrentTime from './components/CurrentTime.jsx';
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
                    backgroundColor : ((this.state.currDate.getHours() < 6) || (this.state.currDate.getHours() > 18)) ? 'navyblue' : 'lightblue'
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval( this.intervalId );
        }

        render(){
            return  <div style={{
                              backgroundColor: this.state.backgroundColor
                            }}>
                        <Hello date={this.state.currDate}/>
                        <Weather />
                        <footer>
                            <CurrentDate date={this.state.currDate}/>
                            <CurrentTime date={this.state.currDate}/>
                        </footer>
                    </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

})
