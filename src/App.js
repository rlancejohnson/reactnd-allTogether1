import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddUserForm from './AddUserForm.js'
import UsersList from './UsersList.js'
import HideScoresButton from './HideScoresButton'

export default class App extends Component {
  state = {
    users: [],
    hideScores: false,
    inputErr: ''
  }

  addUser = (user) => {
    if(this.state.users.some(element => element.username === user.username)) {
      this.setState({
        inputErr: 'You have entered an invalid username. Try again.'
      })
      
    } else {
      this.setState((prevState) => ({
        users: [...prevState.users, user],
        inputErr: ''
      }))
    }
  }

  updateHideScores = (value) => {
    this.setState({
      hideScores: value
    })
  }

  render() {
    const { users, hideScores, inputErr } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUserForm addUser={this.addUser} inputErr={inputErr}/>
        <br/><br/>
        <HideScoresButton hideScores={hideScores} updateHideScores={this.updateHideScores}/>
        <UsersList users={users} hideScores={hideScores}/>
      </div>
    )
  }
}