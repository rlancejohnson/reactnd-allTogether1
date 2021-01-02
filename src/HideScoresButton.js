import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HideScoresButton extends Component {
    handleClick = () => {
        this.props.updateHideScores(!this.props.hideScores)
    }

    render() {
        const { hideScores } = this.props

        return (
            <button className="smallButton" onClick={this.handleClick}>{hideScores ? `Show` : `Hide`} the Number of Games Played</button>
        )
    }
}

HideScoresButton.propTypes = {
    updateHideScores: PropTypes.func.isRequired
}