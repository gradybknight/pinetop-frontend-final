import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRunOverview, getGraphData} from '../actions/FractionalStillAction';
import UnitOpTabCard from '../components/UnitOpTabCard';
import FractionalStillButtons from './FractionalStillButtons';
import InitiateFractionalStillCard from './InitiateFractionalStillCard';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Paper from '@material-ui/core/Paper'
import { LinearProgress } from '../../node_modules/@material-ui/core';
import Typography from '@material-ui/core/Typography';

class FractionalStill extends Component {


    changePotState = () => {
        console.log(`changing state to ${!this.props.isRunning}`);
        this.props.setPot(!this.props.isRunning);
    }

    componentDidMount() {
        this.props.getGraphData();
        this.props.getRunOverview();
        this.interval =  setInterval(this.props.getGraphData, 60000);
        this.intervalOverview = setInterval(this.props.getRunOverview, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGraph() {
        this.props.getGraphData();
    }

    render() {
        // let lastTimePoint = this.props.graphData[this.props.graphData.length-1].x;
        // let lastTemperature = this.props.graphData[this.props.graphData.length-1].y;
        let lastTemperature = 75
        let lastTimePoint="now"
        return (
            <div>
                
                <UnitOpTabCard 
                    headline="Fractional Still" 
                    graphData={this.props.graphData}
                    lastTimePoint={lastTimePoint}
                    lastTemperature={this.props.serverRunOverview.currentTemperature}
                />
                <Paper>
                    <SnackbarContent message={this.props.serverRunOverview.message}/>
                    <br />
                    <Typography gutterBottom variant="body1" component="p">
                            Progress in Beaker Number {this.props.serverRunOverview.currentBeaker}
                        </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.totalClickCountInBeaker == 0 ? 0 : this.props.serverRunOverview.currentClickCountInBeaker / this.props.serverRunOverview.totalClickCountInBeaker} />
                    <Typography gutterBottom variant="body1" component="p">
                            Overall Run Progress
                        </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.currentBeaker / 21} />
                </Paper>
                <InitiateFractionalStillCard />
                <FractionalStillButtons />
            </div>
        )
  }
}

FractionalStill.propTypes = {
    getRunOverview: PropTypes.func.isRequired,
    getGraphData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    graphData: state.fractionalStill.fractionalGraphData,
    serverRunOverview: state.fractionalStill.serverRunOverview
})


export default connect(mapStateToProps, { getRunOverview, getGraphData })(FractionalStill);