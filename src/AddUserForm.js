import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddUserForm extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
            gamesPlayed: 0
        },
        inputErr: ''
    }

    handleInput = (event) => {
        const { name, value } = event.target

        this.setState((prevState) => ({
            ...prevState,
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
        const inputErr = this.props.addUser(this.state.user)

        if(inputErr) {
            this.setState({
                inputErr
            })
        } else {
            this.resetForm()
        }
    }

    resetForm = () => {
        this.setState({
            user: {
                firstName: '',
                lastName: '',
                username: '',
                gamesPlayed: 0
            },
            inputErr: ''
        })
    }

    render() {
        const { user, inputErr } = this.state

        return (
            <div>
                <h1>New User</h1>
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
                    {inputErr ? <p className="error">{inputErr}</p> : ''}
                    <br/><br/>
                    <button type="submit" className="smallButton" disabled={this.buttonDisabled()}>Add</button>
                </form>
            </div>
        )
    }
}

AddUserForm.propTypes = {
    addUser: PropTypes.func.required
}