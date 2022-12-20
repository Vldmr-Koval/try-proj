import {Link} from "react-router-dom"
import { useForm } from "react-hook-form";



const LogIn = ()=>{
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("example")); 


    return (
      <form className="w-25 py-5 mx-auto d-flex row " onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          })}
        />
        {errors?.firstName?.type === "required" && <p className="success">This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
          <p className="error">First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p className="error" >Alphabetical characters only</p>
        )}
        <label>Laste Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "pattern" && (
          <p className="error" >Alphabetical characters only</p>
        )}
        <label>Age</label>
        <input {...register("age", { min: 18, max: 99 })} />
        {errors.age && (
          <p className="error">You Must be older then 18 and younger then 99 years old</p>
        )}
        <input type="submit" />

        <div className="flex-row d-flex justify-content-between align-items-center">
          <p className="my-auto">Not a member? </p>
          <Link to="/registration" className="section-header_wrap_menu__link border border-primary">Register</Link>
    
        </div>
      </form>
    );
    
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

//   <div className="flex-row d-flex justify-content-between align-items-center">
//     <p className="my-auto">Not a member? </p>
//     <Link to="/registration" className="section-header_wrap_menu__link border border-primary">Register</Link>
    
//   </div>
// </form>
// )
