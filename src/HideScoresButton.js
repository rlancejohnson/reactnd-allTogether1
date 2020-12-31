import React, { Component } from 'react'

export default class HideScoresButton extends Component {
    handleClick = () => {
        this.props.updateHideScores(!this.props.hideScores)
    }

    render() {
        const { hideScores } = this.props

        return (
            <button onClick={this.handleClick}>{hideScores ? `Show the Number of Games Played` : `Hide the Number of Games Played`}</button>
        )
    }
}