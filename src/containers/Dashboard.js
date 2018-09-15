import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPotRunOverview } from '../actions/PotStillAction'
import { getRunOverview } from '../actions/FractionalStillAction'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '../../node_modules/@material-ui/core';


class Dashboard extends Component {

    componentDidMount() {
        this.props.getRunOverview();
        this.props.getPotRunOverview();
        this.fractionalUpdater = setInterval(this.props.getRunOverview, 30000);
        this.potUpdater= setInterval(this.props.getPotRunOverview, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.fractionalUpdater);
        clearInterval(this.potUpdater);
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
                            MashTun
                        </Typography>
                        <LinearProgress variant="determinate" value={0} />
                        <br />
                        <Typography gutterBottom variant="headline" component="h2">
                            Continuous Still
                        </Typography>
                        <LinearProgress variant="determinate" value={0} />
                        <br />

                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.serverRunOverview.running ? `Fractional Still is active. ${this.props.serverRunOverview.message}`: `Fractional Still is idle. ${this.props.serverRunOverview.message}`}
                        </Typography>
                        {this.props.serverRunOverview.running ? <LinearProgress variant="determinate" value={(this.props.serverRunOverview.currentBeaker/20*100)} /> : <LinearProgress variant="determinate" value={0} />}
                        <br />

                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.serverPotOverview.running ? `Pot Still is active.  Current temperature is ${this.props.serverPotOverview.columnTemperature}`: `Pot Still is idle.`}
                        </Typography>
                        {this.props.serverPotOverview.running ? <LinearProgress variant="determinate" value={10} /> : <LinearProgress variant="determinate" value={0} />}

                    
                    </CardContent>
                </Card>
            </div>
        )
  }
}

Dashboard.propTypes = {
    serverRunOverview: PropTypes.func.isRequired,
    serverPotOverview: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    serverRunOverview: state.fractionalStill.serverRunOverview,
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview, getRunOverview })(Dashboard);