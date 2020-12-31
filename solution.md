# Solution

### Data Model Sample
`{
    [
        user1: {
            firstName: 'Lance',
            lastName: 'Johnson',
            username: 'rlancejohnson',
            gamesPlayed: 0
        }
    ]
}`

### Components
1. Add User Form
    * Elements
        1. User first name input
        1. User last name input
        1. Username input
        1. Add button
    * Requirements
        1. Add button is disabled if one field is blank
        1. An error displays once add button is clicked if username already exists
1. Hide Scores
    * Elememts
        1. Hide the Number of Games Played button

    * Requirements
        1. Clicking the button changes the button text to "Show the Number of Games Played" and the displayed username and score will be changed to "username1 played \* games."
1. Users List
    * Elememts
        1. ol
        1. User component

    * Requirements
        1. Maps over the user array and displays a list of user components
1. User
    * Elememts
        1. li

    * Requirements
        1. The list item text should be set to "rlancejohnson played 
        {{gamesPlayed}} games." by default
        1. The list item text should be set to "rlancejohnson played \* games." if the hideScores prop is true

