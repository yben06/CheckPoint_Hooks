import React from 'react';
import Profile from './profile/Profile';
import './App.css';
import Photo from "./photo-de-profil-pro.jpg";


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = { person:{
    fullName : "Ben Ahmed Yassine",
    profession : "web developer",
    bio : "hello world!",
    photo : <img src= {Photo} alt=''></img>},
    show: false
  }
  }


render() {
  return (
    <div className="App-header">
      {
        this.state.show?
          <div className="App-header">
            <h1>{this.state.person.fullName}</h1>
            <div>{this.state.person.photo}</div>
            <h2>{this.state.person.profession}</h2>
            <p>{this.state.person.bio}</p>
            <Profile>
            </Profile>
          </div>
        :null
      }
      <button type="button" className="btn btn-light" onClick={()=>this.setState({...this.state,show:!this.state.show})}>
        <h4>Click me</h4>
      </button>
     </div> 
  );
}
}
export default App;