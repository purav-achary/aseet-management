import { useState, useEffect } from "react";
import React from "react";
import "./Login.css"
import  img8  from '../assets/login.png';
import  img12  from '../assets/Multiply.png';
import { Link } from "react-router-dom";
function Login() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container"

style={{
    height: "100%",
    width: "100%",
    position: "absolute"
}}

    >

    <div className="back">
    <Link to={"/"}>
    <img  src={img12}  style={{marginTop: "11px"}}    ></img>
    </Link>
    </div>


    <img  src={img8}></img>

    
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className=" success">Signed in successfully
        <button><Link to={"/"}>Done</Link></button>
        </div>
      ) : (
        <pre>{(formValues, undefined)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            
              
            />
            
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="submit">Submit</button>
        </div>
        
      </form>
          
    </div>
  );
}

export default Login;