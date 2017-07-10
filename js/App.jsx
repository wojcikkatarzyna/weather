import React from 'react';
import ReactDOM from 'react-dom';

import Weather from './components/Weather.jsx';

document.addEventListener('DOMContentLoaded', function() {
    class App extends React.Component{
        render(){
            return <Weather />;
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

})
