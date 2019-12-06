import React from 'react';
import './App.css';
import PCard from './Components/PCard';
import useAxios from './Hooks/useAxios';



function App (){
  const [playerData ] = useAxios ('http://localhost:5000/api/players')
return (
  <div className="App">
      <div className= 'Cards'>
        {playerData.map (person => (
          <PCard key={person.id} name={person.name} country={person.country} searches={person.searches}/>
          )) }
        </div>
    </div>
)
}

export default App;
