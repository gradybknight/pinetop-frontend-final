import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class FractionalStillButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {message:''};

        this.retractArm = this.retractArm.bind(this);
        this.extendArm = this.extendArm.bind(this);
        
        this.openValve = this.openValve.bind(this);
        this.closeValve = this.closeValve.bind(this);
        this.heatOff = this.heatOff.bind(this);
    }

    retractArm () {
        axios.get('http://107.13.224.253:3001/retractarm')
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    extendArm () {
        axios.get('http://107.13.224.253:3001/extendarm')
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    openValve () {
        axios.get('http://107.13.224.253:3001/openvalve')
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    closeValve () {
        axios.get('http://107.13.224.253:3001/closevalve')
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    heatOff () {
        axios.get('http://107.13.224.253:3001/turnoffheat')
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    render() {
        return (
            <div>
                <Paper>
                    <Button variant="contained" color="primary" onClick={this.retractArm}>
                        Retract Arm
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.extendArm}>
                        Extend Arm
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.openValve}>
                        Open Solenoid
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.closeValve}>
                        Close Solenoid
                    </Button>
                    <Button variant="contained" color="secondary" onClick={this.heatOff}>
                        Heat Off
                    </Button>
                    <p> {this.state.message} </p>
                </Paper>
            </div>
        )
  }
}



export default (FractionalStillButtons);