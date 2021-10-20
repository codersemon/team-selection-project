import { useEffect, useState } from 'react';
import './App.css';
import User from './User';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])

  const [team, setTeam] = useState([])
  const addTeam = (tm) => {
    const newMember = [...team, tm]
    setTeam(newMember)
  }

  return (
    <div className='container'>
      <h2>Team Member</h2>
      <ul>
        {team.map(tm => <li>{tm}</li>)}
      </ul>
      <h2>Available Applicant</h2>
      {users.map((ud, i) => <User key={i} tMem={addTeam} userInfo={ud}></User>)}
    </div>
  );
}

export default App;
