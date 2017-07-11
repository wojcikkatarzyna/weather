import React from 'react';

class Hello extends React.Component {
        render(){
            return  <header>
                        <h1> {(this.props.date.getHours() < 6) || (this.props.date.getHours() > 18) ? ' Good evening, Katowice ! ' : ' Good morning, Katowice ! '} </h1>
                    </header>;
        }
}

module.exports = Hello;
