import React from 'react';

class CurrentTime extends React.Component {
    render(){
        return  <div>
                    <h4> Current time in Katowice: </h4>
                    <h1> {this.props.date.toLocaleTimeString()} </h1>
                </div>
    }
}

module.exports = CurrentTime;
