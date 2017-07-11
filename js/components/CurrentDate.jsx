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
        return  <footer>
                    <div>
                        <h4> {this.checkDay(this.props.date)} </h4>
                        <h2> {this.props.date.toLocaleDateString()} </h2>
                    </div>
                    <div>
                        <h2> {this.props.date.toLocaleTimeString()} </h2>
                    </div>
                </footer>
    }
}

module.exports = CurrentDate;
