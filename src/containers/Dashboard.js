import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPotRunOverview } from '../actions/PotStillAction'
import { getRunOverview } from '../actions/FractionalStillAction'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '../../node_modules/@material-ui/core';
import CurrentDateAndTime from '../components/CurrentDateAndTime';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getRunOverview();
        this.props.getPotRunOverview();
        this.fractionalUpdater = setInterval(this.props.getRunOverview, 30000);
        this.potUpdater= setInterval(this.props.getPotRunOverview, 30000);
        this.percentRunComplete = (Date.now() - this.props.serverPotOverview.timeStarted) / (this.props.serverPotOverview.forcedTerminationTime * 60 * 60 * 1000)*100;
        this.percentRunCompleteUpdater = setInterval( () => {
            this.percentRunComplete = (Date.now() - this.props.serverPotOverview.timeStarted) / (this.props.serverPotOverview.forcedTerminationTime * 60 * 60 * 1000)*100;
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.fractionalUpdater);
        clearInterval(this.potUpdater);
        clearInterval(this.percentRunCompleteUpdater);
    }

    updateGraph() {
        this.props.getPotGraphData();
    }

    render() {
        return (
            <div>
                <Card >
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Mash Tun
                        </Typography>
                        <LinearProgress variant="determinate" value={0} />
                        <br />
                        <Typography gutterBottom variant="headline" component="h2">
                            Continuous Still
                        </Typography>
                        <LinearProgress variant="determinate" value={0} />
                        <br />

                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.serverRunOverview.running ? `Fractional Still is active. ${this.props.serverRunOverview.message}. Current Temperature is ${this.props.serverRunOverview.currentTemperature} C.`: `Fractional Still is idle. ${this.props.serverRunOverview.message}`}
                        </Typography>
                        {this.props.serverRunOverview.running ? <LinearProgress variant="determinate" value={(this.props.serverRunOverview.currentBeaker/20*100)} /> : <LinearProgress variant="determinate" value={0} />}
                        <br />

                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.serverPotOverview.running ? `Pot Still is active.  Current temperature is ${this.props.serverPotOverview.columnTemperature} C.`: `Pot Still is idle.`}
                        </Typography>
                        {this.props.serverPotOverview.running ? <LinearProgress variant="determinate" value={this.percentRunComplete} /> : <LinearProgress variant="determinate" value={0} />}
                        <br/>
                        <CurrentDateAndTime />
                    
                    </CardContent>
                </Card>
            </div>
        )
  }
}

Dashboard.propTypes = {
    getPotRunOverview: PropTypes.func.isRequired,
    getRunOverview: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    serverRunOverview: state.fractionalStill.serverRunOverview,
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview, getRunOverview })(Dashboard);