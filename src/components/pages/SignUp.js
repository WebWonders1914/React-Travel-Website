import React from 'react';
import '../../App.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';
import "./SignUp.css";
import SignUpFooter from '../SignUpFooter';

export default function SignUp() {

  const validationSchema = Yup.object().shape({
   
    fullname: Yup.string()
        .required('Full Name is required'),
   
   
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),

        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
   
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
});
 //resolver helps to define data requirements
// functions to build form returned by useForm() hook
const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(validationSchema)
});

function onSubmit(data) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
}




  return ( <>
<div className="bcimg">      
    <div className="card m-3"  id="formcss">
    <h5 className="card-header">Sign Up to <span id="spn">GHUMO  </span>  in order to experience the best Tours of your life!</h5>
    <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} onReset={reset} className="frmcss" >
           
            <div className="form row">
            <div className="form-group col">
            <label>Full Name</label>
                    <input name="fullname" id="frstnm" type="text" ref={register} className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.fullname?.message}</div>
                </div>
               
                <div className="form-group col ">
                    <label>Email</label>
                    <input name="email" type="text" ref={register} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
            </div>
            <div className="form row">
                <div className="form-group col">
                    <label>Password</label>
                    <input name="password" type="password" ref={register} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group col">
                            <label>Confirm Password</label>
                            <input name="confirmPassword" type="password" ref={register} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>
               
            </div>
            <div className="form-group form-check">
                <input name="acceptTerms" type="checkbox" ref={register} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                <label for="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary mr-1" >Register </button>
                <button className="btn btn-secondary" type="reset">Reset</button>
            </div>
        </form>
        
    </div>
    
</div>
</div>
 <SignUpFooter />
</>
)
}

















