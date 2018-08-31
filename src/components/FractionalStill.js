import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRunOverview, getGraphData} from '../actions/FractionalStillAction';
import UnitOpTabCard from '../components/UnitOpTabCard';
import FractionalStillButtons from './FractionalStillButtons';
import InitiateFractionalStillCard from './InitiateFractionalStillCard';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class FractionalStill extends Component {


    changePotState = () => {
        console.log(`changing state to ${!this.props.isRunning}`);
        this.props.setPot(!this.props.isRunning);
    }

    componentDidMount() {
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
                <SnackbarContent message={this.props.serverRunOverview.message}/>
                <UnitOpTabCard 
                    headline="Fractional Still" 
                    graphData={this.props.graphData}
                    lastTimePoint={lastTimePoint}
                    lastTemperature={lastTemperature}
                />
                
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