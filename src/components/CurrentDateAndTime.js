import React, { Component } from 'react';
import Moment from 'moment';

class CurrentDateAndTime extends Component {

    state = {
        currentTime : Moment(Date.now()).format('D-MMM-YY h:mm:ss')
    }
    
    componentWillMount() {
        this.timerInterval = setInterval( () => {
            this.setState({currentTime:Moment(Date.now()).format('D-MMM-YY h:mm:ss')});
        },500)
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    render() {
        return (
            <div>
                Current Time: {this.state.currentTime}
            </div>
        )
  }
}

export default (CurrentDateAndTime);