
import React, { Component } from 'react'

class Education extends Component {


    render() {

      return(
        <>
          <div className="w3-container w3-card w3-white">
            <h2 className="w3-text-grey w3-padding-16">
              <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
              Education
            </h2>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Trakya Üniversitesi</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                2011 - 2015
              </h6>
              
              <hr />
            </div>
            <div className="w3-container">
              <h5 className="w3-opacity">
                <b>Yenidoğan Anadolu Lisesi</b>
              </h5>
              <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right" />
                2006 - 2010
              </h6>
     
              <br />
            </div>
          </div>
        </>
      )
      }

}
export default Education;