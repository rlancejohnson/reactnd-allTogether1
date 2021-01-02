import React, { Component } from 'react'

export default class AddUserForm extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            gamesPlayed: 0
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    buttonDisabled = () => {
        const { firstName, lastName, username} = this.state.user
        return firstName === '' || lastName === '' || username === ''
    }

    addUser = (event) => {
        event.preventDefault();
        this.props.addUser(this.state.user)
        this.resetForm()
        
    }

    resetForm = () => {
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                username: '',
                gamesPlayed: 0
            }
        })
    }

    render() {
        const { user } = this.state
        const { inputErr } = this.props

        return (
            <form onSubmit={this.addUser}>
                <label>First Name</label>
                <input type="text"
                    name="firstName" 
                    value={user.firstName}
                    onChange={this.handleInput}/>
                <br/><br/>
                <label>Last Name</label>
                <input type="text"
                    name="lastName" 
                    value={user.lastName}
                    onChange={this.handleInput}/>
                <br/><br/>
                <label>Username</label>
                <input type="text"
                    name="username" 
                    value={user.username}
                    onChange={this.handleInput}/>
                <br/>
                {inputErr ? inputErr : ''}
                <br/><br/>
                <button type="submit" disabled={this.buttonDisabled()}>Add</button>
            </form>
        )
    }
}