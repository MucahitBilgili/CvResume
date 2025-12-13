import React, { Component } from 'react'

class WorkExperience extends Component {


  render() {

    return (
      <>
        <div className="experience-section">
          <div className="modern-card-content">
            <h2 className="section-header">
              <i className="fa fa-suitcase" />
              Deneyim
            </h2>
          </div>

          <div className="experience-item fade-in-up">
            <h5 className="company-header">
              <b>EminEvim | Yazılım Uzmanı</b>
            </h5>
            <h6 className="date-badge">
              <i className="fa fa-calendar" />
              08/2022 -
              <span className="current-badge">Current</span>
            </h6>

            <div className='project-header'>İnternet Şube - VPos Entegrasyonu</div>
            <div className='project-description'>
              Eminevim internet şubesinin içerisinde Ziraat Katılım sanal pos entegrasyonu projesidir. Müşterilerin 3D Ödeme ile işlem yapılmasi sağlanmıştır.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>NetCore, ReactJs, MSSQL</span><br />
              <span className='tech-label'>Link:</span>
              <a href="https://isube.eminevim.com.tr" target="_blank" rel="noopener noreferrer">EminEvim iŞube</a>
            </div>

            <div className='project-header'>İnternet Şube</div>
            <div className='project-description'>
              Eminevim müşterilerine açık internet şube uygulamasıdır.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>NetCore, ReactJs, MSSQL</span><br />
              <span className='tech-label'>Link:</span>
              <a href="https://isube.eminevim.com.tr" target="_blank" rel="noopener noreferrer">EminEvim iŞube</a>
            </div>

            <div className='project-header'>Crm</div>
            <div className='project-description'>
              Eminevim şubelerinde kullanılan iç uygulamadır.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>NetMvc, KendoUi, MSSQL</span>
            </div>
          </div>

          <div className="experience-item fade-in-up">
            <h5 className="company-header">
              <b>BilgeAdam Teknoloji | Yazılım Uzmanı (FLO Mağazacılık)</b>
            </h5>
            <h6 className="date-badge">
              <i className="fa fa-calendar" />
              01/2022 - 07/2022
            </h6>

            <div className='project-header'>OMS Dönüşüm Projesi</div>
            <div className='project-description'>
              E-Ticaretten gelen siparişlerin kargo işlemlerinin gerçekleştirildiği mağazalar tarafından kullanılan iç uygulamadır.
              Özetle bu uygulama ile mağazaya gelen müşterinin aradığı ürün özellikleri bulunamazsa başka bir FLO mağazasından
              temin edilerek OMS uygulamasına gönderilir ve müşteriye kargo yapılır.<br />
              Net Framework API servisleri .Net6 versiyona yükseltildi.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>Net6, Angular, MSSQL</span>
            </div>
          </div>

          <div className="experience-item fade-in-up">
            <h5 className="company-header">
              <b>Türkiye Maarif Vakfı | Yazılım Geliştirici</b>
            </h5>
            <h6 className="date-badge">
              <i className="fa fa-calendar" />
              09/2017 – 01/2022
            </h6>

            <div className='project-header'>E-Maarif Projesi</div>
            <div className='project-description'>
              40'tan fazla farklı ülkede kullanılan okul yönetim sistemidir.<br />
              Eğitim hizmeti verilen ülkelerde tüm okul süreçlerini ve öğrenci yaşam döngüsü yönetimini kapsayan platformdur.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>Netcore, Angular, MSSQL</span><br />
              <span className='tech-label'>Link:</span>
              <a href="https://e-maarif.org/" target="_blank" rel="noopener noreferrer">E-Maarif</a>
            </div>

            <div className='project-header'>E-Maarif Platformu Dönüşüm Projesi</div>
            <div className='project-description'>
              Emaarif projesinin frontend uygulaması Angular 6'dan Angular 8'e yükseltildi.<br />
              Emaarif projesinin frontend uygulaması IIS'den AWS S3 ve CloudFront servislerine taşındı.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>AWS, Angular</span>
            </div>

            <div className='project-header'>E-Maarif - ERP Entegrasyon Projesi</div>
            <div className='project-description'>
              Öğrencilerin tahsilatını okul yönetim sisteminden ERP muhasebe modülüne aktarmayı gerçekleştiren entegrasyon projesidir.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>.Netcore, Odata</span>
            </div>
          </div>

          <div className="experience-item fade-in-up">
            <h5 className="company-header">
              <b>Karsan Otomotiv | Stajyer</b>
            </h5>
            <h6 className="date-badge">
              <i className="fa fa-calendar" />
              06/2016 - 09/2016
            </h6>

            <div className='project-header'>Nöbetci Eczane</div>
            <div className='project-description'>
              İstanbul'daki nöbetçi eczaneleri kolayca ulaşabileceğiniz bir uygulamadır.<br />
              <span className='tech-label'>Teknoloji:</span>
              <span className='tech-info'>Android</span><br />
              <span className='tech-label'>Link:</span>
              <a href="https://play.google.com/store/apps/details?id=com.blogspot.resoft.isteczanem" target="_blank" rel="noopener noreferrer">Play Store</a>
            </div>
          </div>
        </div>
      </>
    )
  }

}
export default WorkExperience;

