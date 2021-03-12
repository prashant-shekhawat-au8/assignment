import React, { useState } from 'react';
import "./styling/form.css";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

 const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
   
    setAgree(!agree);
   
  }

  
 

  return (
    <div className="App">
      <div class="one_omega">Omega</div>
      <div>
      <form onSubmit={formik.handleSubmit} class="form">
        <div class="">
        <div  class="heading">Sign Up</div>
        <div  class="para9">No Credits Card Required</div>
          
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            placeholder="Full Name"
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p style={{color:"red"}}>{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
          {formik.errors.email && formik.touched.email && (
            <p style={{color:"red"}}>{formik.errors.email}</p>
          )}
        </div>
        <div>
          
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="password"
          />
          {formik.errors.password && formik.touched.password && (
            <p style={{color:"red"}}>{formik.errors.password}</p>
          )}
        </div>
        
        <div class="term">
            <div><input type="checkbox" id="agree" onChange={checkboxHandler}/></div>
            <label class="condition" htmlFor="agree"><div class="iagree"><span >I agree to</span><span class="grey"> Terms and Condition</span></div></label>
            </div>
        <div>
          <button class="button2" type="submit" disabled={!agree} >Get Started
          </button>
        </div>
        <div class="term" class="term1">
            <label class="condition" htmlFor="agree"><span >Already have an account?</span><span class="grey">Sign In</span></label>
        </div>
        
      </form>
      </div>
    </div>
  );
}