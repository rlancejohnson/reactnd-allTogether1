import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddUserForm from './AddUserForm.js'
import UsersList from './UsersList.js'
import HideScoresButton from './HideScoresButton'

export default class App extends Component {
  state = {
    users: [],
    hideScores: false
  }

  addUser = (user) => {
    this.setState((prevState) => ({
      users: [...prevState.users, user]
    }))
  }

  updateHideScores = (value) => {
    this.setState({
      hideScores: value
    })
  }

  render() {
    const { users, hideScores } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUserForm addUser={this.addUser}/>
        <br/><br/>
        <HideScoresButton hideScores={hideScores} updateHideScores={this.updateHideScores}/>
        <UsersList users={users} hideScores={hideScores}/>
      </div>
    )
  }
}