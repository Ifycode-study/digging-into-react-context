import { Component } from 'react';

class App extends Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return(
      <div>
        <User user={this.state.user} />
      </div>
    )
  }
}

const User = (props) => (
  <div>
    <UserProfile {...props.user} />
  </div>
)

const UserProfile = (props) => (
  <div>
    <h2>Profile Page of {props.username}</h2>
    <UserDetails {...props} />
  </div>
)

const UserDetails = (props) => (
  <div>
    <p>Username: {props.username}</p>
    <p>First Name: {props.firstName}</p>
    <p>Last Name: {props.lastName}</p>
  </div>
)

export default App;
