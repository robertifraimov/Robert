import React, { Component } from 'react';
import '../Home/Home.css';
import ProfileImage from '../Images/Profile.jpeg';


 class Home extends Component {
    render() {
        return (
            <div className="Home">
               <img src={ProfileImage} alt="Profile" className="ProfileImage"/>
            </div>
        )
    }
}
export default Home;