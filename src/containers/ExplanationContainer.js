import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNextExplanationCard } from '../actions/userAction';
import ProjectSummary from '../components/ProjectSummary';

class ExplanationContainer extends Component {
    

    onNextClick = () => {
        let currentIndex = this.props.currentArrayIndex
        let maxIndex = this.props.arrayOfExplanations.length-1
        if (currentIndex === maxIndex) {
            this.props.setNextExplanationCard(0)
        } else {
            this.props.setNextExplanationCard(currentIndex+1);
        }
    }

    onPreviousClick = () => {
        let currentIndex = this.props.currentArrayIndex
        let maxIndex = this.props.arrayOfExplanations.length-1
        if (currentIndex === 0) {
            this.props.setNextExplanationCard(maxIndex)
        } else {
            this.props.setNextExplanationCard(currentIndex-1);
        }
    }

    onStartClick = () => {
        this.props.setNextExplanationCard(0)
    }


    render(){
        let arrayOfParagraphs = 
            this.props.arrayOfExplanations[this.props.currentArrayIndex]
                .arrayOfParagraphs
                .map(text => {
            return {
                id: Math.floor(Math.random()*100),
                text: text
            };
        });
        console.log(this.props.currentArrayIndex)
        console.log(this.props.arrayOfExplanations)
        console.log(arrayOfParagraphs);

        return(
            <div>
                <ProjectSummary 
                    img = {this.props.arrayOfExplanations[this.props.currentArrayIndex].img}
                    headline = {this.props.arrayOfExplanations[this.props.currentArrayIndex].headline}
                    arrayOfParagraphs = {arrayOfParagraphs}
                    onNextClick = {this.onNextClick}
                    onPreviousClick = {this.onPreviousClick}
                    onStartClick = {this.onStartClick}
                    sample="explaination container"                    
                />
            </div>
        )
    }
}



const mapStateToProps = state => ({
    arrayOfExplanations: state.userInfo.arrayOfExplanations,
    currentArrayIndex: state.userInfo.currentArrayIndex
})

export default connect(mapStateToProps, { setNextExplanationCard })(ExplanationContainer);
