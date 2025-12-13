import React from 'react';

import Footer from './Footer';
import Profile from './Profile';
import WorkExperience from './WorkExperience';
import  { Component } from 'react'


  
class Main extends Component {


    render() {
       
      return(
        <>
        <div className="modern-container">
          <div className="modern-grid">
            {/* Left Column - Profile */}
            <div className="animate-left">
              <Profile />
            </div>
            
            {/* Right Column - Experience */}
            <div className="animate-right">
              <WorkExperience />
            </div>
          </div>
        </div>
        <footer className="modern-footer">
          <Footer />
        </footer>
        </>
      )
      }

}
export default Main;
