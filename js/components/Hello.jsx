import React from 'react';

class Hello extends React.Component {
        render(){
            return  <div style={{
                              backgroundColor: "yellow",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}>
                        <h1> {(this.props.date.getHours() < 6) || (this.props.date.getHours() > 18) ? ' Good evening, Katowice ! ' : ' Good morning, Katowice ! '} </h1>
                    </div>;
        }
}

module.exports = Hello;
