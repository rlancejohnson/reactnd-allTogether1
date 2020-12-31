import React from 'react'
import User from './User.js'

export default function UsersList(props) {
    return (
        <div>
            <h2>Users</h2>
            {props.users.map(user => (
                <User key={user.username} user={user} hideScores={props.hideScores}/>
            ))}
        </div>
    )
}