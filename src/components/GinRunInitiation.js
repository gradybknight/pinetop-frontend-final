import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPotRunOverview } from '../actions/PotStillAction'
import Typography from '@material-ui/core/Typography'
 

class GinRunInitiation extends Component {
    state = {
        forcedTerminationTime:8,
        volumeHearts:38.8,
        alcoholPercent:0.25,
        juniper:175,
        cardamonm:15,
        coriander:50,
        angelica:15,
        orange:10,
        lemon:15,
        userSelectedGinRun:true,
        typeOfRun:'Gin'
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
        this.startPotRun = this.startPotRun.bind(this);
    }

    startPotRun() {
        let potStillInitiatingValues = JSON.stringify({
            forcedTerminationTime:this.state.forcedTerminationTime,
            volumeHearts:this.state.volumeHearts,
            alcoholPercent:this.state.alcoholPercent,
            juniper:this.state.juniper,
            cardamonm:this.state.cardamonm,
            coriander:this.state.coriander,
            angelica:this.state.angelica,
            orange:this.state.orange,
            lemon:this.state.lemon,
            typeOfRun:'Gin'
        });
        axios.post('http://107.13.224.253:3001/setpot', {
            potStillInitiatingValues
        })
            .then(res => {
                console.log(res.data);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    startStripOfGinRun() {
        let potStillInitiatingValues = JSON.stringify({
            forcedTerminationTime:8,
            typeOfRun:'Strip of Gin'
        });
        axios.post('http://107.13.224.253:3001/setpot', {
            potStillInitiatingValues
        })
            .then(res => {
                console.log(res.data);
                let message = res.data.message;
                this.setState({message:message})
            })
    }

    render() {
        return (
            <div>
                {this.props.serverPotOverview.requiresStrippingRun ? 
                    <Paper> 
                        <Typography align="center" gutterBottom variant="headline" component="h2">
                                The previous gin run finished by time.  Please initiate stripping run to recover remaining alcohol
                        </Typography>   
                        <br />
                        <Button variant="contained" color="primary" onClick={this.startStripOfGinRun}>
                            Start Stripping of Previous Gin Run
                        </Button> 
                    </Paper> 
                    :
                    <Paper>
                        <TextField
                            id="forcedTerminationTime"
                            name="forcedTerminationTime"
                            label="Time for the gin run"
                            defaultValue="8"
                            helperText="hours"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="volumeHearts"
                            name="volumeHearts"
                            label="Volume hearts used"
                            defaultValue="38.8"
                            helperText="liters"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="alcoholPercent"
                            name="alcoholPercent"
                            label="Percent alcohol of hearts"
                            defaultValue="0.25"
                            helperText="as decimal"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <br />
                        <TextField
                            id="juniper"
                            name="juniper"
                            label="Juniper"
                            defaultValue="175"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="cardamonm"
                            name="cardamonm"
                            label="Cardamonm"
                            defaultValue="50"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="coriander"
                            name="coriander"
                            label="Coriander"
                            defaultValue="15"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="angelica"
                            name="angelica"
                            label="Angelica Root"
                            defaultValue="15"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="orange"
                            name="orange"
                            label="Orange Peel"
                            defaultValue="10"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <TextField
                            id="lemon"
                            name="lemon"
                            label="Lemon Peel"
                            defaultValue="15"
                            helperText="grams"
                            margin="normal"
                            onChange={this.onChange}
                        />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.startPotRun}>
                            Start Gin Run
                        </Button>
                    </Paper>
                }
            </div>
        )
  }
}

GinRunInitiation.propTypes = {
    getPotRunOverview: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview })(GinRunInitiation);