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
    
    componentDidMount() {
        this.props.getGraphData();
        this.props.getRunOverview();
        this.interval =  setInterval(this.props.getGraphData, 30000);
        this.intervalOverview = setInterval(this.props.getRunOverview, 2500)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGraph() {
        this.props.getGraphData();
    }
    

    render() {
        const normalise = (current, total) => {Math.floor(current/total*100)} ;

        // let lastTimePoint = this.props.graphData[this.props.graphData.length-1].x;
        // let lastTemperature = this.props.graphData[this.props.graphData.length-1].y;
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
                            Progress in Beaker Number {this.props.serverRunOverview.currentBeaker}. Click {this.props.serverRunOverview.currentClickCountInBeaker} of {this.props.serverRunOverview.totalClickCountInBeaker}
                    </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.totalClickCountInBeaker == 0 ? 0 : (this.props.serverRunOverview.currentClickCountInBeaker / this.props.serverRunOverview.totalClickCountInBeaker*100)} />
                    <Typography gutterBottom variant="body1" component="p">
                            Overall Run Progress: Beaker {this.props.serverRunOverview.currentBeaker} out of 21
                        </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.currentBeaker / 21 * 100} />
                </Paper>
                {this.props.serverRunOverview.running ? '' : <InitiateFractionalStillCard />}
                {this.props.serverRunOverview.running ? '' : <FractionalStillButtons />}
                
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