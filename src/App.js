import React from 'react';
import './profile/profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/profile';


function App() {
  function handleName() {
    return alert("Riadh BEN OTHMANE");
  }
  return (
    <div className="App">
      <header  className="App-header">
        <Profile Email="r.benothmann@yahoo.com"  Phone="21203049" FullName="BEN OTHMANE Riadh"  Bio="I'm 39 Years old , Passionated with web development , trying to build my carrer in this field " Profession="job seeker"  Adress="Sousse">
          <img  style={{ borderRadius: '5px', width : '100px', height: '100px'}} alt="User-Profile-Image" src='riadh.jpg' alt='abc'></img>
           { handleName() }
          </Profile>
      </header>
    </div>
  );
}

export default App;