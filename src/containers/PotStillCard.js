import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPotRunOverview, getPotGraphData } from '../actions/PotStillAction'
import UnitOpTabCard from '../components/UnitOpTabCard';
import PotStillPassPhrase from '../components/PotStillPassPhrase'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

class PotStillCard extends Component {

    componentDidMount() {
        this.props.getPotGraphData();
        this.props.getPotRunOverview();
        this.interval = setInterval(this.props.getPotGraphData, 30000);
        this.intervalOverview = setInterval(this.props.getPotRunOverview, 60000);
        this.percentRunComplete = (Date.now() - this.props.serverPotOverview.timeStarted) / (this.props.serverPotOverview.forcedTerminationTime * 60 * 60 * 1000)*100;
        this.percentRunCompleteUpdater = setInterval( () => {
            this.percentRunComplete = (Date.now() - this.props.serverPotOverview.timeStarted) / (this.props.serverPotOverview.forcedTerminationTime * 60 * 60 * 1000)*100;
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.intervalOverview);
    }

    updateGraph() {
        this.props.getPotGraphData();
    }

    render() {
        return (
            <div>
                {this.props.serverPotOverview.running ? 
                    <div>
                        <Paper>
                            <Typography variant="headline">
                                {Math.floor(this.percentRunComplete)}% Complete Versus Run Time
                            </Typography>
                            <CircularProgress
                                variant="static"
                                value={this.percentRunComplete}
                                size={80}
                            ></CircularProgress>
                        </Paper>
                        <UnitOpTabCard 
                            headline="Pot Still" 
                            graphData={this.props.graphData}
                            lastTimePoint='n/a'
                            lastTemperature={this.props.serverPotOverview.columnTemperature}
                        /> 
                    </div>:
                    <PotStillPassPhrase />
                }
            </div>
        )
  }
}

PotStillCard.propTypes = {
    getPotRunOverview: PropTypes.func.isRequired,
    getPotGraphData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    graphData: state.potStill.graphData,
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview, getPotGraphData })(PotStillCard);