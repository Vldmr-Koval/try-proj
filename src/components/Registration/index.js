import React, {useEffect, useState } from "react";
import {useInput} from '../../hooks/useInput'


// const useValidation = (value, validations) =>{

//   const [isEmpty, setEnpty] = useState(true)
//   const [minLengthErr, setMinLengthErr] = useState(false)
//   const [maxLengthErr, setMaxLengthErr] = useState(false)
//   const [emailErr, setEmailErr] = useState(false)
//   const [passErr, setPassErr] = useState(false)
//   const [inputValid, setInputValid] = useState(false)


//   useEffect(() => {
//    for (const validation in validations){
//       switch(validation){
        
//         case 'minLength':
//           value.length < validations[validation] ? setMinLengthErr(true) : setMinLengthErr(false) 
//           break
//         case 'maxLength':
//           value.length > validations[validation] ? setMaxLengthErr(true) : setMaxLengthErr(false) 
//           break
//         case 'isEmpty':
//           value ? setEnpty(false) : setEnpty(true) 
//           break
//         case 'isEmail':
//           const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//           re.test(String(value).toLowerCase()) ? setEmailErr(false) : setEmailErr(true)
//           break
//         case 'isPass':
//           const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
//           pass.test(String(value)) ? setPassErr(false) : setPassErr(true)
//           break
//       }
//    }
//   }, [value])

//   useEffect(() => {
//     if (isEmpty ||  minLengthErr || maxLengthErr || emailErr || passErr){
//       setInputValid(false)
//     } else{
//       setInputValid (true)
//     }


//   }, [isEmpty,
//     minLengthErr,
//     maxLengthErr,
//     emailErr,
//     passErr])
  
  
//   return {
//     isEmpty,
//     minLengthErr,
//     maxLengthErr,
//     emailErr,
//     passErr,
//     inputValid,
    
//   }
// }



// const useInput = (initialValue, validations) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDirty, setDirty] = useState(false);
//   const valid = useValidation(value, validations)

//   // const isPassRevue= (value) => {
//   //   const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
//   //   return pass.test(String(value)) ? true : false
//   // }

//   const onChange = (e) =>{
//     setValue(e.target.value)
//     // console.log(isPassRevue(e.target.value) , "====10str")
//   } 

//   const onBlur = (e) =>{
//     setDirty(true)
//   } 

//   return {
//     value,
//     onChange,
//     onBlur,
//     isDirty, 
//     ...valid
//   }
// }


const Registration = ()=>{
   const userName = useInput('', {isEmpty: true, minLength: 3, })
   const email = useInput('', {isEmpty: true, isEmail: true})
   const userPass = useInput('', {isEmpty: true, minLength: 6, maxLength: 20, isPass: true})
  
   const handleSubmit= (e) => {
    e.preventDefault();
    // console.log(userName, userPass, email + " === 104str Reg")
    window.localStorage.setItem(userName.value, userPass.value)
  }
  //  isPass: true, валідація пароля працює, не працює виведення !!!



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
     {(userPass.isDirty && userPass.isPass) && <div className="error">Пароль не валідний</div>}
     {/* // FIXME: поле не відображається при passErr  */}
     {(userPass.isDirty && userPass.minLengthErr) && <div className="error">Поле має містити мінімум 6 знаків </div>}
     {(userPass.isDirty && userPass.maxLengthErr) && <div className="error">Пароль перевищує допустиму кількість символів (20)</div>}

    <input onChange={e => userPass.onChange(e)} onBlur={e => userPass.onBlur(e)} value={userPass.value} name="userPass" type="text" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  
  <button disabled={!userName.inputValid || !email.inputValid || !userPass.inputValid} type="submit" className="">Registration</button>

 
</form>
    
}

export default Registration



