import React, { Component } from 'react'
import { Paper, Card, Typography, TextField } from '../../node_modules/@material-ui/core';

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
                    <Card border="10px">
                        <Typography variant="headline" component="h1">
                            Gin Dilution Calculator
                        </Typography>
                        <Typography component="p">
                                <p> Hearts Alcohol Percentage: </p>    
                                <TextField name='startingAlcoholPercent' value={this.state.startingAlcoholPercent} onChange={this.onChange}/>
                        </Typography>
                        <form >
                            {/* <div>
                                <label> Hearts Alcohol Percentage: </label><br />
                                <input type='text' name='startingAlcoholPercent' value={this.state.startingAlcoholPercent} onChange={this.onChange}/>
                            </div> */}
                            <br />
                            {this.state.startingAlcoholPercent >0 ? 
                            <div>
                                <label> Add {(this.state.volumeOfHeartsToAdd /1 ).toFixed(1)} liters of hearts ({(this.state.volumeOfHeartsToAdd / 3.74).toFixed(2)} gallons) </label><br />
                                <label> QS with water to 10 gallons </label><br />
                            </div>
                            : ''}
                        </form>
                    </Card>
                </Paper>
            </div>
        )
  }
}

export default UtilityCalculator;