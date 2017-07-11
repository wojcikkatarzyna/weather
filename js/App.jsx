import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather.jsx';
import CurrentTime from './components/CurrentTime.jsx';
import CurrentDate from './components/CurrentDate.jsx';

document.addEventListener('DOMContentLoaded', function() {
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                currDate : new Date(),
            }
        }

        componentDidMount() {
            this.intervalId = setInterval( () => {
                this.setState({
                    currDate : new Date(),
                });
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval( this.intervalId );
        }

        render(){
            return  <div>
                        <CurrentDate date={this.state.currDate}/>
                        <CurrentTime date={this.state.currDate}/>
                        <Weather />
                    </div>;
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

})
