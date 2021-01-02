import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddUserForm from './AddUserForm.js'
import UsersList from './UsersList.js'

export default class App extends Component {
  state = {
    users: []
  }

  addUser = (user) => {
    let inputErr = ''

    if(this.state.users.some(element => element.username === user.username)) {
      inputErr = 'You have entered an invalid username. Try again.'
      
    } else {
      this.setState((prevState) => ({
        users: [...prevState.users, user].sort((user1, user2) => {
          return user1.gamesPlayed - user2.gamesPlayed
        })
      }))
    }

    return inputErr
  }

  render() {
    const { users } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div style={{display: 'flex', justifyContent: 'center', margin: '2%'}}>
          <div  style={{flexDirection: 'column', padding: '0% 2%'}}>
            <AddUserForm addUser={this.addUser}/>
          </div>
          <div style={{flexDirection: 'column', padding: '0% 2%'}}>
            <UsersList users={users}/>
          </div>
        </div>
      </div>
    )
  }
}