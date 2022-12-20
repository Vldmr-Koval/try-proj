import {Link} from "react-router-dom"


const Header = () =>{
    return <header className="section-header">
    <div className="container">
      <div className="section-header_wrap">
        <a href="#" className="section-header_wrap__homelink">
          <img className="section-header_wrap__homelink__logo" src={require("../../img/logo.png")}>
          </img>
        </a>

        <div className="">
        

          <p className="">Hi, user</p>

        </div>

        <nav className="section-header_wrap_menu">
          <Link to="/" className="section-header_wrap_menu__link">Home<span></span></Link>
          
          <Link to="/contacts" className="section-header_wrap_menu__link">Contact<span></span></Link>
          <Link to="/logIn" className="section-header_wrap_menu__link border border-primary">Log in / Registration<span></span></Link>

        </nav>
        
      </div>
    </div>
  </header>

 
}

export default Header