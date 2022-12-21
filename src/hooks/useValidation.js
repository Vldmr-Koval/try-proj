import { useState , useEffect } from "react"

const useValidation = (value, validations) =>{

    const [isEmpty, setEnpty] = useState(true)
    const [minLengthErr, setMinLengthErr] = useState(false)
    const [maxLengthErr, setMaxLengthErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    const [inputValid, setInputValid] = useState(false)
  
  
    useEffect(() => {
     for (const validation in validations){
        switch(validation){
          
          case 'minLength':
            value.length < validations[validation] ? setMinLengthErr(true) : setMinLengthErr(false) 
            break
          case 'maxLength':
            value.length > validations[validation] ? setMaxLengthErr(true) : setMaxLengthErr(false) 
            break
          case 'isEmpty':
            value ? setEnpty(false) : setEnpty(true) 
            break
          case 'isEmail':
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            re.test(String(value).toLowerCase()) ? setEmailErr(false) : setEmailErr(true)
            break
          case 'isPass':
            const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
            pass.test(String(value)) ? setPassErr(false) : setPassErr(true)
            break
        }
     }
    }, [value])
  
    useEffect(() => {
      if (isEmpty ||  minLengthErr || maxLengthErr || emailErr || passErr){
        setInputValid(false)
      } else{
        setInputValid (true)
      }
  
  
    }, [isEmpty,
      minLengthErr,
      maxLengthErr,
      emailErr,
      passErr])
    
    
    return {
      isEmpty,
      minLengthErr,
      maxLengthErr,
      emailErr,
      passErr,
      inputValid,
      
    }
  }
  export  {useValidation}