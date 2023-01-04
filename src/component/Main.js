import React from 'react';

import Footer from './Footer';
import Profile from './Profile';
import WorkExperience from './WorkExperience';
import  { Component } from 'react'


  
class Main extends Component {


    render() {
       
      return(
        <>
        <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
          <div className="w3-row-padding">
            {/* Left Column */}
            <div className="w3-third">
              <Profile />
              <br />
            </div>
            <div>
            
            </div>
            {/* Right Column */}
            <div className="w3-twothird">
              <WorkExperience />
            </div>
          </div>
        </div>
        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <Footer />
        </footer>
        </>
      )
      }

}
export default Main;