import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      githubData: {}
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/git-austinmccollom`)
      .then( (res) => {
        debugger
        console.log(res);
        this.setState({ githubData: res.data });
        console.log(this.state.githubData);
      } )
      .catch( (err) => {
        console.log(err);
      })

  }

  render() { 
    return ( 
      <div className="App">
        
      </div>
    );
  }
}
 
export default App;

