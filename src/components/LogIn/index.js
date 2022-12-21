import {Link} from "react-router-dom"
import {useInput} from '../../hooks/useInput'



const LogIn = ()=>{
  const userName = useInput('', {isEmpty: true, minLength: 3, })
  const userPass = useInput('', {isEmpty: true, minLength: 6, maxLength: 20, isPass: true})


  const isReg = (name) => {
    return name === localStorage.getItem(name)
  }

  
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(userName.value, userPass.value + " === 13str LogIn")
    isReg(userName.value) ? 
    alert("Ви успішно залогінились") :
    alert("Ви успішно залогінились")


    // window.localStorage.setItem(userName.value, userPass.value)
  }

    return <form onSubmit={handleSubmit} className="w-25 py-5 mx-auto">
  
  
    <div className="form-outline mb-4">
      {(userName.isDirty && userName.isEmpty) && <div className="error">Поле не може бути пустим</div>}
      {(userName.isDirty && userName.minLengthErr) && <div className="error">Поле має містити мінімум 3 знаки </div>}
      <input onChange={e => userName.onChange(e)} onBlur={e => userName.onBlur(e)} value={userName.value} name="userName" type="text" className="form-control" />
      <label className="form-label" htmlFor="form2Example3">User Name</label>
    </div>
  
   
  
    <div className="form-outline mb-4">
       {(userPass.isDirty && userPass.isEmpty) && <div className="error">Поле не може бути пустим</div>}
       {(userPass.isDirty && userPass.isPass) && <div className="error">Пароль не валідний</div>}
       {/* // FIXME: поле не відображається при passErr  */}
       {(userPass.isDirty && userPass.minLengthErr) && <div className="error">Поле має містити мінімум 6 знаків </div>}
       {(userPass.isDirty && userPass.maxLengthErr) && <div className="error">Пароль перевищує допустиму кількість символів (20)</div>}
  
      <input onChange={e => userPass.onChange(e)} onBlur={e => userPass.onBlur(e)} value={userPass.value} name="userPass" type="text" className="form-control" />
      <label className="form-label" htmlFor="form2Example2">Password</label>
    </div>
  
    
    <button disabled={!userName.inputValid || !userPass.inputValid} type="submit" className="">Log in</button>
  

    <div className="flex-row d-flex justify-content-between align-items-center">
      <p className="my-auto">Not a member? </p>
      <Link to="/registration" className="section-header_wrap_menu__link border border-primary">Register</Link>
    
    </div>
   
  </form>
      
}

export default LogIn


// (
//   <form className="w-25 py-5 mx-auto">
//    <div className="form-outline mb-4">
//     <input name="userName" type="text" id="form2Example3" className="form-control" />
//     <label className="form-label" htmlFor="form2Example3">User Name</label>
//   </div>

//   <div className="form-outline mb-4">
//     <input type="password" id="form2Example2" className="form-control" />
//     <label className="form-label" htmlFor="form2Example2">Password</label>
//   </div>

  

//   <button type="button" className="btn btn-primary btn-block mb-4">Log in</button>

  // <div className="flex-row d-flex justify-content-between align-items-center">
  //   <p className="my-auto">Not a member? </p>
  //   <Link to="/registration" className="section-header_wrap_menu__link border border-primary">Register</Link>
    
  // </div>
// </form>
// )
