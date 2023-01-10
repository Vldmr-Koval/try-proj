import React from "react";
// import {useState} from 'react'
import { Link } from "react-router-dom";
import './modal.scss'

const Modal = ({ setIsOpen, typeModal }) => {

    // setTimeout(function(){
    //     setIsOpen(false)
    //  }, 2000);

    let massege = ''
    
        switch(typeModal){
        
          case 'success':
            massege = 'Вітаю, Ви успішно залогінились!'
            break;
          case 'error':
            massege = 'Нажаль такого користувача не знайдено!'
            break;
        }

    return (
      <div className="bg">
        <div className="block">
                <button className="btn-exit" onClick={() => setIsOpen(false)}> 
                  <img className="btn-exit_img" src={require("../../img/211652_close_icon.png")} alt="close"></img>
                </button>
            
                <h3 className="header"> Системе сповіщення</h3>
                <p className="content">
                    {massege}
                </p>
                {(typeModal === 'error') && <p>Можливо ви хочите <Link to="/registration" className="section-header_wrap_menu__link border border-primary">зареєструватись</Link> </p>}
                
                <div>
                    <button className="btn-modal" onClick={() => setIsOpen(false)}>закрити модалку</button>
                    
                </div>
        </div>
    </div>
      
    );
  };
  
  export default Modal;