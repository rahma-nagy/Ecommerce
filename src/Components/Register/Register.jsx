import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
    let validate =(values)=>{
        let errors={}
        if(!values.name){
            errors.name="name is required."
        }else if(values.name.lenght<15){
          errors.name = 'must be 15 characters or less'
        }

        if(!values.email){
            errors.email="email is required."
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = 'invalid email';
        }

        if(!values.password){
            errors.password="password is required."
        }else if(!/^[A-Z][a-z0-9A-Z@#$%]$/i.test(values.password)){
            errors.password = 'invalid password';
        }

        if(!values.rePassword){
            errors.Password="rePassword is required."
        }else if(values.rePassword!=values.password){
            errors.rePassword = 'password and rePassword not match';
        }

        return errors

    }
   let registerFormik= useFormik({
        initialValues:{
           name:'',
           email:'',
           password:'',
           rePassword:''
        },
        validate
        ,

    
        onSubmit:(values)=>{
console.log(values);
//send to api 
        }
    })
    console.log(registerFormik.errors);
  return (
    <>
    <div className='w-50 m-auto my-5'>
        <h2>Register Now:</h2>
        <form onSubmit={registerFormik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input  onBlur={registerFormik.handleBlur} value={registerFormik.values.name} onChange={registerFormik.handleChange} type='text' className='form-control my-3' id='name' name='name'/>
              {registerFormik.errors.name &&registerFormik.touched.name?
               <div className='alert alert-danger'>
                    {registerFormik.errors.name}
               </div>: ""}

            <label htmlFor='email'>Email</label>
            <input  onBlur={registerFormik.handleBlur} value={registerFormik.values.email} onChange={registerFormik.handleChange} type='email' className='form-control my-3' id='email' name='email'/>
            {registerFormik.errors.email &&registerFormik.touched.email ?
               <div className='alert alert-danger'>
                    {registerFormik.errors.email}
               </div>: ""}
            <label htmlFor='password'>Password</label>
            <input  onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='password' name='password'/>
            {registerFormik.errors.password &&registerFormik.touched.password ?
               <div className='alert alert-danger'>
                    {registerFormik.errors.password}
               </div>: ""}
            <label htmlFor='password'>rePassword</label>
            <input  onBlur={registerFormik.handleBlur} value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='rePassword' name='rePassword'/>
            {registerFormik.errors.rePassword &&registerFormik.touched.rePassword?
               <div className='alert alert-danger'>
                    {registerFormik.errors.rePassword}
               </div>: ""}
            <button type='submit'  className='btn bg-main text-white'>Register</button>
        </form>
    </div>
      
    </>
  )
}
