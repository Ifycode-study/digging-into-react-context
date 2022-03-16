import { createContext, useState } from 'react';

const UserContext = createContext({
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe'
});
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
      <UserProvider value={
        {
          state: user,
          actions: {
            handleFirstNameChange: event => {
              const value = event.target.value;
              setUser(prevState => ({
                user: {
                  ...prevState.user,
                  firstName: value
                }
              }))
            },

            handleLastNameChange: event => {
              const value = event.target.value;
              setUser(prevState => ({
                user: {
                  ...prevState.user,
                  lastName: value
                }
              }))
            }
          }
        }
      }>
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
    {({ state }) => {
      return (
        <div>
          <h2>Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
)

const UserDetails = () => {
  return (
    <UserConsumer>
      {({ state, actions }) => {
        return (
         <div>
            <div>
            <p>Username: {state.username}</p>
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
          </div>
           <div>
            <div>
              <input type="text" value={state.firstName} onChange={actions.handleFirstNameChange} />
            </div>
            <div>
              <input type="text" value={state.lastName} onChange={actions.handleLastNameChange} />
            </div>
          </div>
         </div>
        );
      }}
    </UserConsumer>
  )
}

export default App;
