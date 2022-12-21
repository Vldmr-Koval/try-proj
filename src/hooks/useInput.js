import { useState } from "react";
import {useValidation} from './useValidation'


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)
  
    // const isPassRevue= (value) => {
    //   const pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/
    //   return pass.test(String(value)) ? true : false
    // }
  
    const onChange = (e) =>{
      setValue(e.target.value)
      // console.log(isPassRevue(e.target.value) , "====10str")
    } 
  
    const onBlur = (e) =>{
      setDirty(true)
    } 
  
    return {
      value,
      onChange,
      onBlur,
      isDirty, 
      ...valid
    }
  }

  export {useInput}