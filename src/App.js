import React, {createContext, useState} from 'react'
import './App.css';
import ContextABC from './ContextABC'
import ContextA from './ContextA'

export const UserContext = createContext();
export const HobbyContext = createContext();


function App() {
  const [user, setUser] = useState({
    name: 'Harry Potter',
    age: 11
  })

  const [hobby, setHobby] = useState('Quiditch')
  
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextABC/>
          <ContextA/>
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
