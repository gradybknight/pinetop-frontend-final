import React, { Component } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import { getPotRunOverview } from '../actions/PotStillAction'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GinRunInitiation from './GinRunInitiation';

class PotStillButtons extends Component {
    state = {
        selectedBigPot:true
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked,
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
        console.log(this.state);
        let potStillInitiatingValues = JSON.stringify({forcedTerminationTime:40, typeOfRun:'Large Stripping'});
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
                <Paper>
                    Gin Run
                    <Switch
                        checked = {this.state.selectedBigPot}
                        onChange = {this.handleChange('selectedBigPot')}
                        value = 'selectedBigPot'
                        color = 'primary'
                    />
                    Big Pot
                    <br />
                    {this.state.selectedBigPot ? <Button variant='contained' color='primary' onClick={this.startPotRun}> Start Big Pot </Button>:<GinRunInitiation />}
                </Paper>
            </div>
        )
    }
}

PotStillButtons.propTypes = {
    getPotRunOverview: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview })(PotStillButtons);