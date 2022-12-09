const Footer = () => {

    return <section className ="section-footer">
    <div className ="container" id="footer">
     
      <div className ="section-footer_wrap">
        <div className ="section-footer_wrap__description">
          <div className ="section-footer_wrap__description__title">
            Piroll Design, Inc.
          </div>
          <div className ="section-footer_wrap__description__subtitle">
            © 2021 Piroll. All rights reserved. <br />
            Designed by robirurk.
          </div>
        </div>
        <div className ="section-footer_wrap__contacts">
          <a href="mailto:hello@pirolltheme.com">hello@pirolltheme.com</a>
          <a href="tel:+44987065908">+44 987 065 908</a>
        </div>
        <div className ="section-footer_wrap__links">
          <div className ="section-footer_wrap__links__box">
            <a href="#" className ="section-footer_wrap__links__box__item">Projects</a>
            <a href="#" className ="section-footer_wrap__links__box__item">About</a>
            <a href="#" className ="section-footer_wrap__links__box__item">Services</a>
            <a href="#" className ="section-footer_wrap__links__box__item">Carreer</a>
          </div>
          <div className ="section-footer_wrap__links__box">
            <a href="#" className ="section-footer_wrap__links__box__item">News</a>
            <a href="#" className ="section-footer_wrap__links__box__item">Events</a>
            <a href="#" className ="section-footer_wrap__links__box__item">Contact</a>
            <a href="#" className ="section-footer_wrap__links__box__item">Legals</a>
          </div>
        </div>
        <div className ="section-footer_wrap__social">
          <a href="https://www.facebook.com/vldmr.koval"  className ="section-footer_wrap__social__item">Facebook</a>
          <a href="#" className ="section-footer_wrap__social__item">Twitter</a>
          <a href="#" className ="section-footer_wrap__social__item">Instagram</a>
          <a href="#" className ="section-footer_wrap__social__item">Dribbble</a>
        </div>
      </div>
    </div>
  </section>
  
}

export default Footer