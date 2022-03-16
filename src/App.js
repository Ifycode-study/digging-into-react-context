import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: 'Ifycode',
    firstName: 'Mary',
    lastName: 'May'
  });
  return (
    <div>
    <User user={user} />
  </div>
  );
}

const User = ({ user }) => (
  <div>
    <UserProfile {...user} />
  </div>
)

const UserProfile = ({ ...user }) => (
  <div>
    <h2>Profile Page of {user.username}</h2>
    <UserDetails {...user} />
  </div>
)

const UserDetails = ({ ...user }) => (
  <div>
    <p>Username: {user.username}</p>
    <p>First Name: {user.firstName}</p>
    <p>Last Name: {user.lastName}</p>
  </div>
)

export default App;
