import React from 'react';
import ReactDOM from 'react-dom';


class CurrentDate extends React.Component {

    checkDay = (dane) => {
        let dayNo = dane.getDay();
        switch (dayNo) {
            case 0: {
                var dayOfWeek = "Sunday";
                break;
            }
            case 1: {
                var dayOfWeek = "Monday";
                break;
            }
            case 2: {
                var dayOfWeek = "Tuesday";
                break;
            }
            case 3: {
                var dayOfWeek = "Wednesday";
                break;
            }
            case 4: {
                var dayOfWeek = "Thursday";
                break;
            }
            case 5: {
                var dayOfWeek = "Friday";
                break;
            }
            case 6: {
                var dayOfWeek = "Saturday";
                break;
            }

        }
        return dayOfWeek;
    }

    render(){
        return  <div>
                    <h4> Today it's: </h4>
                    <h3> {this.checkDay(this.props.date)} </h3>
                    <h1> {this.props.date.toLocaleDateString()} </h1>
                </div>
    }
}

module.exports = CurrentDate;
