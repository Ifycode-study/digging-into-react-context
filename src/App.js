import { createContext, useState } from 'react';

const UserContext = createContext({});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

function App() {
  const [user, setUser] = useState({
    username: 'Ifycode',
    firstName: 'Mary',
    lastName: 'May'
  });
  return (
    <div>
      <UserProvider value={user}>
        <User />
      </UserProvider>
  </div>
  );
}

const User = () => (
  <div>
    <UserProfile />
  </div>
)

const UserProfile = () => (
  <UserConsumer>
    {context => {
      return (
        <div>
          <h2>Profile Page of {context.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
)

const UserDetails = () => (
  <UserConsumer>
    {context => {
      return (
        <div>
          <p>Username: {context.username}</p>
          <p>First Name: {context.firstName}</p>
          <p>Last Name: {context.lastName}</p>
      </div>
      );
    }}
  </UserConsumer>
)

export default App;
