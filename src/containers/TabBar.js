import React from 'react';
import { connect } from 'react-redux';
import TabbedNavBar from '../components/TabbedNavBar';
import { setActiveCard } from '../actions/userAction';
import PotStillCard from './PotStillCard';
import UtilityCalculator from '../components/UtilityCalculator';
import Dashboard from '../containers/Dashboard';
import FractionalStill from '../components/FractionalStill';

const TabBar = ( props ) => {
    // let selectedTab;
    
    const setActiveTab = (tabIndex, selectedTab) => {
        let indexValue = parseInt(tabIndex.value, 10);  // includes radix parameter to make react quit complaining
        selectedTab = props.allowedTabs[indexValue];
        props.setActiveCard(selectedTab);
    } 

    return (
        <div>
            <TabbedNavBar tabName={props.allowedTabs} testFunction={setActiveTab} />
            {/* {props.activeCard === 'Explanation' ? <ExplanationCard /> : ""} */}
            {props.activeCard === 'Stripping Pot' ? <PotStillCard /> : ""}
            {props.activeCard === 'Utility Calculators' ? <UtilityCalculator /> : ""}
            {props.activeCard === 'Dashboard' ? <Dashboard /> : ""}
            {props.activeCard === 'Fractional Still' ? <FractionalStill /> : ""}
        </div>
    )
}



const mapStateToProps = state => ({
    allowedTabs: state.userInfo.allowedTabs,
    activeCard: state.userInfo.activeCard
})

export default connect(mapStateToProps, { setActiveCard })(TabBar);