import React from 'react'

export default function User(props) {
    return (
        <p>{props.user.username} played {props.hideScores ? `\\*` : props.user.gamesPlayed} games.</p>
    )
}