import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPotRunOverview } from '../actions/PotStillAction'
import { forceGinStrippingRun } from '../actions/userAction';
import Button from '@material-ui/core/Button'

class TestContainer extends Component {
    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    clickTheButton() {
        console.log(`button was clicked`)
        this.props.forceGinStrippingRun();
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.props.forceGinStrippingRun}>Test Button</Button>
            </div>
        )
  }
}

TestContainer.propTypes = {
    getPotRunOverview: PropTypes.func.isRequired,
    forceGinStrippingRun: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    serverPotOverview: state.potStill.serverPotOverview
})


export default connect(mapStateToProps, { getPotRunOverview, forceGinStrippingRun })(TestContainer);