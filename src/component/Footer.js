
import React, { Component } from 'react'

class Footer extends Component {


    render() {

      return(
        <>
           <p>Find me on social media.</p>
        <i className="fa fa-github w3-hover-opacity" />
        <p>
          Powered by{" "}
          <a href="https://bmucahid.blogspot.com/" target="_blank" rel="noopener noreferrer">
            BlogSpot
          </a>
        </p>
        </>
      )
      }

}
export default Footer;