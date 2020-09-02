import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Follower from "./Components/Follower.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      githubUser: {},
      githubFollowers: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/git-austinmccollom`)
      .then( (res) => {
        this.setState({ githubUser: res.data });
        console.log(this.state.githubUser);
      } )
      .catch( (err) => {
        console.log(err);
      })
    axios.get(`https://api.github.com/users/git-austinmccollom/followers`)
      .then( (res) => {
        this.setState({ githubFollowers: res.data });
        console.log(this.state.githubFollowers);
      } )
      .catch( (err) => {
        console.log(err);
      })
  }

  render() { 
    return ( 
      <div className="container">
        <Follower imgUrl={this.state.githubUser.avatar_url} login={this.state.githubUser.login}/>
        <h1>Followers</h1>
        { this.state.githubFollowers.map( (follower) => {
          return <Follower key={follower.id} imgUrl={follower.avatar_url} login={follower.login}/>
        })
        }
      </div>
    );
  }
}
 
export default App;

