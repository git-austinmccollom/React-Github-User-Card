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

                </div>
            </div>
         );
    }
}
 
export default Follower;