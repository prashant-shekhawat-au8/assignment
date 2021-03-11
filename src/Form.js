import React, { useState } from 'react';
import "./styling/form.css";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
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
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
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
      

      <form onSubmit={formik.handleSubmit} class="form">
        <div>
        <h1>Sign UP</h1>
        <p >No Crdits Card Required</p>
          
          <input
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            placeholder="Full Name"
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p>{formik.errors.full_name}</p>
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
            <p>{formik.errors.email}</p>
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
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            placeholder="Confirm Password"
          />
          {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p>{formik.errors.confirm_password}</p>
          )}
        </div>
        <div class="term">
            <div><input type="checkbox" id="agree" onChange={checkboxHandler}/></div>
            <label class="condition" htmlFor="agree">I agree to<span> Terms and Condition</span></label>
            </div>
        <div>
          <button class="button2" type="submit" disabled={!agree} className="btn" >Submit</button>
        </div>
      </form>
    </div>
  );
}