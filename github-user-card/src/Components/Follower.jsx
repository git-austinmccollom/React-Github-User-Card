import React, { Component } from 'react';
import './Follower.css'

class Follower extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={"card"}>
                <img src={this.props.imgUrl} alt="github_avatar"/>
                <div className={"card-info"}>
                    <h1>{this.props.login}</h1>
                    <a href={`https://github.com/${this.props.login}`} target="_blank">See Profile</a>
                </div>
            </div>
         );
    }
}
 
export default Follower;