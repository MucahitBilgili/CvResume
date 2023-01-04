import React, { Component } from 'react'

class WorkExperience extends Component {


  render() {

    return (
      <>
        <div className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16">
            <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
            Deneyim
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
              <b className='m-bText'>Teknoloji : </b> NetCore, ReactJs <br />
              <b className='m-bText'>Link :   </b><a href="https://isube.eminevim.com.tr" target="_blank" rel="noopener noreferrer">EminEvim iŞube</a>
            </div>
            <div className='m-projectHeader'>Crm</div>
            <div className='m-desc'>
              Eminevim şubelerinde kullanılan iç uygulamadır. <br />
              <b className='m-bText'>Teknoloji : </b> NetMvc, KendoUi
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
            <div className='m-projectHeader'>OMS Dönüşüm Projesi</div>
            <div className='m-desc'>
              E-Ticaretten gelen siparişlerin kargo işlemlerinin gerçekleştirildiği mağazalar tarafından kullanılan iç uygulamadır.
              Özetle bu uygulama ile mağazaya gelen müşterinin aradığı ürün özellikleri bulunamazsa başka bir FLO mağazasından
              temin edilerek OMS uygulamasına gönderilir ve müşteriye kargo yapılır. <br />
              Net Framework API servisleri .Net6 versiyona yükseltildi. <br />
              <b className='m-bText'>Teknoloji : </b> Net6, Angular
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
            <div className='m-projectHeader'>E-Maarif Projesi </div>

            <div className='m-desc'>
              40'tan fazla farklı ülkede kullanılan okul yönetim sistemidir. <br />
              Eğitim hizmeti verilen ülkelerin tüm okul süreçlerini ve öğrenci yaşam döngüsü yönetimini kapsayan platformdur. <br />
              <b className='m-bText'>Teknoloji : </b> Netcore, Angular <br />
              <b className='m-bText'>Link :   </b><a href="https://e-maarif.org/" target="_blank" rel="noopener noreferrer">E-Maarif</a>
            </div>
            <div className='m-projectHeader'>E-Maarif Platformu Dönüşüm Projesi </div>
            <div className='m-desc'>
              Emaarif projesinin frontend tarafı Angular 6'dan Angular 8'e yükseltildi. <br />
              Emaarif projesinin frontend uygulamasının IIS'den AWS S3 ve CloudFront servislerine taşındı. <br />
              <b className='m-bText'>Teknoloji : </b> AWS, Angular
            </div>
            <div className='m-projectHeader'>E-Maarif - ERP Entegrasyon Projesi </div>
            <div className='m-desc'>
               Öğrenci tahsilatını okul yönetim sisteminden ERP muhasebe modülüne aktarmayı gerçekleştiren entegrasyon projesidir. <br />
              <b className='m-bText'>Teknoloji : </b> .Netcore, Odata
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
            <div className='m-projectHeader'>Nöbetci Eczane</div>
            <div className='m-desc'>
            İstanbul'daki nöbetçi eczaneleri kolayca ulaşabileceğiniz bir uygulamadır.<br />
              <b className='m-bText'>Teknoloji : </b> Net6, Angular <br />
              <b className='m-bText'>Link :   </b><a href="https://play.google.com/store/apps/details?id=com.blogspot.resoft.isteczanem" target="_blank" rel="noopener noreferrer">Play Store</a>
            </div>
            <br />
          </div>
        </div>
      </>
    )
  }

}
export default WorkExperience;