import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }
  updatePicture(val){
    this.setState({picture: val})
  }
  updateName(val){
    this.setState({name: val})
  }
  addFriend(){
    let newFriends = this.state.friends.slice();
    newFriends.push({picture: this.state.picture, name: this.state.name})
    this.setState({friends: newFriends, picture: '', name: ''})
  }
  render(){
    const friends = this.state.friends.map((element, index) => (
      <div key={index}>
        <img width='100px' src={element.picture} alt={element.name}/>
        <span>{element.name}</span>
      </div>
    ))
    return (
      <div className="App">
        <span>Picture:</span>
        <input 
          value={this.state.picture} 
          onChange={(e) => this.updatePicture(e.target.value)}/>
        <span>Name:</span>
        <input 
          value={this.state.name}
          onChange={(e) => this.updateName(e.target.value)}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    )
  }
}
export default App;








