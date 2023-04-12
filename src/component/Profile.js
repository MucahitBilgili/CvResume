
import React, { Component } from 'react'

class Profile extends Component {


    render() {

      return(
        <>
          <div className="w3-white w3-text-grey w3-card-4">
            <div className="w3-display-container show_bg_2">
              <img
                src={window.location.origin + '/img/profil.jpg'}
                style={{ width: "100%" }}
                alt="Avatar"
              />
              <div className="m-headerCompany">
                <h2>Mücahit Bilgili</h2>
              </div>
            </div>
            <div className="w3-container">
              <div className='m-textProfile'>
                <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
                Yazılım Uzmanı
              </div>
              <div className='m-textProfile'>
                <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
                İstanbul
              </div>
              <div  className='m-textProfile'>
                <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
                bmucahid@gmail.com
              </div>
              <div className='m-textProfile'>
                <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
                
              </div>
              <hr className='m-hr' />
              
              <div className="w3-large w3-text-theme m-headerCompany">
                <b>
                  <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
                  Eğitim
                </b>
              </div>
              <div className='m-textProfile'>Trakya Üniversitesi - Bilgisayar Müh.<b> (2011 - 2015)</b></div>       
              <div className='m-textProfile'>Yenidoğan Anadolu Lisesi <b> (2006 - 2010)</b></div>
              <hr className='m-hr' />
              <div className="w3-large m-headerCompany">
                <b>
                  <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
                  Yetenek
                </b>
              </div>
              
              <span className="w3-tag w3-teal w3-round m-margin">.NetCore </span>
              <span className="w3-tag w3-teal w3-round m-margin">Angular 6+ </span>
              <span className="w3-tag w3-teal w3-round m-margin">React </span>
              <span className="w3-tag w3-teal w3-round m-margin">Dapper</span>
              <span className="w3-tag w3-teal w3-round m-margin">ASP.NET MVC </span>
              <span className="w3-tag w3-teal w3-round m-margin">MSSQL </span>
              <br />
              <span className="w3-tag w3-teal w3-round m-margin">Bitbucket </span>
              <span className="w3-tag w3-teal w3-round m-margin">Git </span>
              <span className="w3-tag w3-teal w3-round m-margin">TFS </span>
              <br />
              <span className="w3-tag w3-teal w3-round m-margin">Log (GrayLog , ELK) </span>
              <span className="w3-tag w3-teal w3-round m-margin">Jira</span>
              <span className="w3-tag w3-teal w3-round m-margin">AWS (S3, CloudFront)</span>

              <br />
              <hr className='m-hr' />
              
              <div className="w3-large w3-text-theme m-headerCompany">
                <b>
                  <i className="fa fa-book fa-fw w3-margin-right w3-text-teal" />
                  Sertifika
                </b>
              </div>
              <div  className='m-textProfile'><a href="https://www.hackerrank.com/certificates/3e11ade282ec" target="_blank" rel="noopener noreferrer">Hackerrank-Angular</a></div>       
              <div  className='m-textProfile'><a href="https://www.hackerrank.com/certificates/3e11ade282ec" target="_blank" rel="noopener noreferrer">Hackerrank-SQL </a></div>
              <div  className='m-textProfile'>Kanban System Design (KMP I) </div>
              <hr className='m-hr' />
              <div className="w3-large m-headerCompany">
                <b>
                  <i className="fa fa-futbol-o fa-fw w3-margin-right w3-text-teal" />
                  Hobi
                </b>
              </div>
              
              <span className="w3-tag w3-teal w3-round m-margin">Futbol</span>
              <span className="w3-tag w3-teal w3-round m-margin">Fotoğraf</span>
              <span className="w3-tag w3-teal w3-round m-margin">E-Learning</span>
             
            </div>
            <br />
          </div>
        </>
      )
      }

}
export default Profile;
