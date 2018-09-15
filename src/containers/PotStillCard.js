import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPotRunOverview, getPotGraphData } from '../actions/PotStillAction'
import UnitOpTabCard from '../components/UnitOpTabCard';
import PotStillPassPhrase from '../components/PotStillPassPhrase'


class PotStillCard extends Component {

    componentDidMount() {
        this.props.getPotGraphData();
        this.props.getPotRunOverview();
        this.interval = setInterval(this.props.getPotGraphData, 30000);
        this.intervalOverview = setInterval(this.props.getPotRunOverview, 60000);
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
                    <UnitOpTabCard 
                        headline="Pot Still" 
                        graphData={this.props.graphData}
                        lastTimePoint='n/a'
                        lastTemperature={this.props.serverPotOverview.columnTemperature}
                    /> :
                    <PotStillPassPhrase />
                }
            </div>
        )
  }
}

PotStillCard.propTypes = {
    setPot: PropTypes.func.isRequired,
    setGraphData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    graphData: state.potStill.graphData,
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview, getPotGraphData })(PotStillCard);