import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import UserInput from './UserInput';
import './App.css';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>App Component</h1>
        <UserProfile />
        <UserInput />
      </div>
    </UserProvider>
  );
}

export default App;
