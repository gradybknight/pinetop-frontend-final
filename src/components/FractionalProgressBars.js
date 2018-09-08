import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper'
import { LinearProgress } from '../../node_modules/@material-ui/core';
import Typography from '@material-ui/core/Typography';

class FractionalStill extends Component {
    
    componentDidMount() {
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGraph() {
        this.props.getGraphData();
    }
    

    render() {
        return (
            <div>
                <Paper>
                    <Typography gutterBottom variant="body1" component="p">
                            Progress in Beaker Number {this.props.serverRunOverview.currentBeaker}. Click {this.props.serverRunOverview.currentClickCountInBeaker} of {this.props.serverRunOverview.totalClickCountInBeaker}
                    </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.totalClickCountInBeaker == 0 ? 0 : (this.props.serverRunOverview.currentClickCountInBeaker / this.props.serverRunOverview.totalClickCountInBeaker*100)} />
                    <Typography gutterBottom variant="body1" component="p">
                            Overall Run Progress: Beaker {this.props.serverRunOverview.currentBeaker} out of 20
                        </Typography>
                    <LinearProgress variant="determinate" value={this.props.serverRunOverview.currentBeaker / 20 * 100} />
                    <br />
                </Paper>
            </div>
        )
    }
}

FractionalStill.propTypes = {
}

const mapStateToProps = state => ({
    graphData: state.fractionalStill.fractionalGraphData,
    serverRunOverview: state.fractionalStill.serverRunOverview
})

export default connect(mapStateToProps, { getRunOverview, getGraphData })(FractionalStill);