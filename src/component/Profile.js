
import React, { Component } from 'react'

class Profile extends Component {


  render() {

    return (
      <>
        <div className="modern-card">
          <div className="profile-header">
            <img
              src={window.location.origin + '/img/profil.jpg'}
              className="profile-image"
              alt="Mücahit Bilgili"
            />
            <h2 className="profile-name">Mücahit Bilgili</h2>
          </div>
          <div className="modern-card-content">
            <div className='info-item'>
              <i className="fa fa-briefcase" />
              Yazılım Uzmanı
            </div>
            <div className='info-item'>
              <i className="fa fa-home" />
              İstanbul
            </div>
            <div className='info-item'>
              <i className="fa fa-envelope" />
              bmucahid@gmail.com
            </div>
            <div className='info-item'>
              <i className="fa fa-phone" />

            </div>
            <hr className='section-divider' />

            <div className="section-header">
              <i className="fa fa-globe" />
              Eğitim
            </div>
            <div className='info-item'>Trakya Üniversitesi - Bilgisayar Müh. <b>(2011 - 2015)</b></div>
            <div className='info-item'>Yenidoğan Anadolu Lisesi <b>(2006 - 2010)</b></div>
            <hr className='section-divider' />
            <div className="section-header">
              <i className="fa fa-asterisk" />
              Yetenek
            </div>

            <div className="tag-container">
              <span className="modern-tag">.NetCore</span>
              <span className="modern-tag">Angular 6+</span>
              <span className="modern-tag">React</span>
              <span className="modern-tag">Dapper</span>
              <span className="modern-tag">ASP.NET MVC</span>
              <span className="modern-tag">MSSQL</span>
              <span className="modern-tag">Bitbucket</span>
              <span className="modern-tag">Git</span>
              <span className="modern-tag">TFS</span>
              <span className="modern-tag">Log (GrayLog, ELK)</span>
              <span className="modern-tag">Jira</span>
              <span className="modern-tag">AWS (S3, CloudFront)</span>
            </div>

            <hr className='section-divider' />

            <div className="section-header">
              <i className="fa fa-book" />
              Sertifika
            </div>
            <div className='info-item'><a href="https://www.hackerrank.com/certificates/3e11ade282ec" target="_blank" rel="noopener noreferrer">Hackerrank-Angular</a></div>
            <div className='info-item'><a href="https://www.hackerrank.com/certificates/3e11ade282ec" target="_blank" rel="noopener noreferrer">Hackerrank-SQL</a></div>
            <div className='info-item'>Kanban System Design (KMP I)</div>
            <hr className='section-divider' />
            <div className="section-header">
              <i className="fa fa-futbol-o" />
              Hobi
            </div>

            <div className="tag-container">
              <span className="modern-tag">Futbol</span>
              <span className="modern-tag">Fotoğraf</span>
              <span className="modern-tag">E-Learning</span>
            </div>

          </div>
        </div>
      </>
    )
  }

}
export default Profile;

