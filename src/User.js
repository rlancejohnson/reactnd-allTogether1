import React from 'react'
import PropTypes from 'prop-types'

export default function User(props) {
    const { user, hideScores } = props

    return (
        <li className="user">
            {user.username} played {hideScores ? `*` : user.gamesPlayed} games.
        </li>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    hideScores: PropTypes.boolean
}