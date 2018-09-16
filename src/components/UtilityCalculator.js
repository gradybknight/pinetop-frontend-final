import React, { Component } from 'react'
import { Paper, Typography, TextField } from '../../node_modules/@material-ui/core';

class UtilityCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingAlcoholPercent:'70',
            volumeOfHeartsToAdd:'17.14'
        };

        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e) {
        // eslint-disable-next-line
        let newVolumeHearts = 120 / (parseInt(this.state.startingAlcoholPercent));
        this.setState({volumeOfHeartsToAdd:newVolumeHearts})
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <Paper>
                    <Typography variant="headline" component="h1">
                        Gin Dilution Calculator
                    </Typography>
                    <Typography component="p">
                            Hearts Alcohol Percentage:
                            <TextField name='startingAlcoholPercent' value={this.state.startingAlcoholPercent} onChange={this.onChange}/>
                    </Typography>
                    <form >
                        {this.state.startingAlcoholPercent >0 ? 
                        <div>
                            <label> Add {(this.state.volumeOfHeartsToAdd /1 ).toFixed(1)} liters of hearts ({(this.state.volumeOfHeartsToAdd / 3.74).toFixed(2)} gallons) </label><br />
                            <label> QS with water to 10 gallons </label><br />
                        </div>
                        : ''}
                    </form>
                </Paper>
            </div>
        )
  }
}

export default UtilityCalculator;