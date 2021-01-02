import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HideScoresButton from './HideScoresButton'
import User from './User.js'

export default class UsersList extends Component {
    state = {
        hideScores: false,
    }

    updateHideScores = (value) => {
        this.setState({
            hideScores: value
        })
    }

    render() {
        const { hideScores } = this.state
        const { users } = this.props

        return (
            <div>
                <div>
                    <h1>Users</h1>
                    <HideScoresButton hideScores={hideScores} updateHideScores={this.updateHideScores}/>
                </div>
                <ol>
                    {users.sort((user1, user2) => {
                        return user2.gamesPlayed - user1.gamesPlayed
                    }).map(user => (
                        <User key={user.username} user={user} hideScores={hideScores}/>
                    ))}
                </ol>
            </div>
        )
    }
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}