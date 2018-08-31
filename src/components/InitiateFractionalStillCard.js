import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';

class InitiateFractionalStillCard extends Component {
    state = {
        startAlcohol:.3,
        startVolume:38.8
    };

    handleChange = name => event => {
        console.log(event.target.value)
        console.log(name)
        this.setState({
            [name]: event.target.value,
        });
    };
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
        this.startFractionalRun = this.startFractionalRun.bind(this);
        this.startSimplifiedRun = this.startSimplifiedRun.bind(this);
    }

    startFractionalRun () {
        console.log(this.state);
        axios.post('http://107.13.224.253:3001/setfractional', {
            startAlcohol:this.state.startAlcohol,
            startVolume:this.state.startVolume
        })
            .then(res => {
                console.log(res.data.message);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    startSimplifiedRun () {
        console.log(this.state);
        axios.get('http://107.13.224.253:3001/simplifiedprogram')
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
                <TextField
                    id="startAlcohol"
                    label="Starting Alcohol Percent"
                    defaultValue="0.3"
                    helperText="Please input as a decimal"
                    margin="normal"
                    name="startAlcohol"
                    onChange={this.onChange}
                />
                <TextField
                    id="startVolume"
                    name="startVolume"
                    label="Starting Volume in Liters"
                    defaultValue="38.8"
                    helperText="Please input as a decimal"
                    margin="normal"
                    onChange={this.onChange}
                />
                <br />
                <Button variant="contained" color="primary" onClick={this.startSimplifiedRun}>
                    Start Fractional Run
                </Button>
                </Paper>
            </div>
        )
  }
}



export default (InitiateFractionalStillCard);