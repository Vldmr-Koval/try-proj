import React, {useEffect, useState } from "react";
import {useInput} from '../../hooks/useInput'


const Registration = ()=>{
   const userName = useInput('', {isEmpty: true, minLength: 3, })
   const email = useInput('', {isEmpty: true, isEmail: true})
   const userPass = useInput('', {isEmpty: true, minLength: 6, maxLength: 20, isPass: true})
  
   const handleSubmit= (e) => {
    e.preventDefault();
    // console.log(userName, userPass, email + " === 104str Reg")
    window.localStorage.setItem(userName.value, userPass.value)
  }



    return <form onSubmit={handleSubmit} className="w-25 py-5 mx-auto">
  
  
  <div className="form-outline mb-4">
    {(userName.isDirty && userName.isEmpty) && <div className="error">Поле не може бути пустим</div>}
    {(userName.isDirty && userName.minLengthErr) && <div className="error">Поле має містити мінімум 3 знаки </div>}
    <input onChange={e => userName.onChange(e)} onBlur={e => userName.onBlur(e)} value={userName.value} name="userName" type="text" className="form-control" />
    <label className="form-label" htmlFor="form2Example3">User Name</label>
  </div>

  <div className="form-outline mb-4">
    {(email.isDirty && email.isEmpty) && <div className="error">Поле не може бути пустим</div>}
    {(email.isDirty && email.emailErr) && <div className="error">Пошта не коректна</div>}
    <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} name="userName" type="text" className="form-control" />
    <label className="form-label" htmlFor="form2Example3">User email</label>
  </div>

  <div className="form-outline mb-4">
     {(userPass.isDirty && userPass.isEmpty) && <div className="error">Поле не може бути пустим</div>}
    
     {(userPass.isDirty && userPass.passErr) && <div className="error">Пароль не валідний</div>}
     {(userPass.isDirty && userPass.minLengthErr) && <div className="error">Поле має містити мінімум 6 знаків </div>}
     {(userPass.isDirty && userPass.maxLengthErr) && <div className="error">Пароль перевищує допустиму кількість символів (20)</div>}

    <input onChange={e => userPass.onChange(e)} onBlur={e => userPass.onBlur(e)} value={userPass.value} name="userPass" type="text" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  
  <button disabled={!userName.inputValid || !email.inputValid || !userPass.inputValid} type="submit" className="">Registration</button>

 
</form>
    
}

export default Registration



