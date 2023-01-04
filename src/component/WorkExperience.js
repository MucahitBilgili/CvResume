
import React, { Component } from 'react'

class WorkExperience extends Component {


  render() {

    return (
      <>
        <div className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16">
            <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
            Work Experience
          </h2>
          <div className="w3-container">
            <h5 className="m-headerCompany">
              <b>EminEvim | Yazılım Uzmanı </b>
            </h5>
            <h6 className="w3-text-teal">
              <i className="fa fa-calendar fa-fw w3-margin-right" />
              08/2022 - {" "}
              <span className="w3-tag w3-teal w3-round">Current</span>
            </h6>
            <div className='m-projectHeader'>İnternet Şube</div>
            <div className='m-desc'>
              Eminevim müşterilerine açık internet şube uygulamasıdır. <br />
              <b>Teknoloji : </b> NetCore, ReactJs 
            </div>
            <div className='m-projectHeader'>Crm</div>
            <div className='m-desc'>
              Eminevim şubelerinde kullanılan iç uygulamadır. <br />
              <b>Teknoloji : </b> NetMvc, KendoUi
            </div>
            <hr className='m-hr' />
          </div>
          <div className="w3-container">
            <h5 className="m-headerCompany">
              <b>BilgeAdam Teknoloji | Yazılım Uzmanı (FLO Mağazacılık)</b>
            </h5>
            <h6 className="w3-text-teal">
              <i className="fa fa-calendar fa-fw w3-margin-right" />
              01/2022 - 07/2022 {" "}

            </h6>
            <div className='m-projectHeader'>OMS Dönüşüm Projesi (Net6,Angular)</div>
            <div className='m-desc'>
              E-Ticaretten gelen siparişlerin kargo işlemlerinin gerçekleştirildiği mağazalar tarafından kullanılan iç uygulamadır.
              Özetle bu uygulama ile mağazaya gelen müşterinin aradığı ürün özellikleri bulunamazsa başka bir FLO mağazasından
              temin edilerek OMS uygulamasına gönderilir ve müşteriye kargo yapılır. <br />
              Net Framework API servisleri .Net6 versiyona yükseltildi.
            </div>
            <hr className='m-hr' />
          </div>
          <div className="w3-container">
            <h5 className="m-headerCompany">
              <b>Türkiye Maarif Vakfı | Yazılım Geliştirici </b>
            </h5>
            <h6 className="w3-text-teal">
              <i className="fa fa-calendar fa-fw w3-margin-right" />
              09/2017 – 01/2022
            </h6>
            <div className='m-projectHeader'>E-Maarif Projesi (Netcore,Angular)</div>

            <div className='m-desc'>
              40'tan fazla farklı ülkede kullanılan okul yönetim sistemidir. <br />
              Eğitim hizmeti verilen ülkelerin tüm okul süreçlerini ve öğrenci yaşam döngüsü yönetimini kapsayan platformdur.
            </div>
            <div className='m-projectHeader'>E-Maarif Platformu Dönüşüm Projesi (AWS,Angular)</div>
            <div className='m-desc'>
              Emaarif projesinin frontend tarafı Angular 6'dan Angular 8'e yükseltildi. <br />
              Emaarif projesinin frontend uygulamasının IIS'den AWS S3 ve CloudFront servislerine taşındı.
            </div>
            <div className='m-projectHeader'>E-Maarif - ERP Entegrasyon Projesi (Netcore)</div>
            <div className='m-desc'>
              ASP.NET Core Web API, RestClient ve Odata ile öğrenci tahsilatını E-Maarif'ten ERP muhasebe modülüne aktarmayı gerçekleştirdiğim entegrasyon projesidir.
            </div>
            <hr className='m-hr' />
          </div>
          <div className="w3-container">
            <h5 className="m-headerCompany">
              <b>Karsan Otomotiv | Stajyer </b>
            </h5>
            <h6 className="w3-text-teal">
              <i className="fa fa-calendar fa-fw w3-margin-right" />
              06/2016 - 09/2016
            </h6>
            <div className='m-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
            <br />
          </div>
        </div>
      </>
    )
  }

}
export default WorkExperience;