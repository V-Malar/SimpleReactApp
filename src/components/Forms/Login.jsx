import React, { useRef, useState } from 'react'
import { validEmail, validPassword } from './Regex.js';

export default function Login(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [details, fetchDetails] = useState({});
    function handleSubmit(e)
    {
        e.preventDefault();
        validEmail.test(emailRef.current.value) ? validPassword.test(passwordRef.current.value)
        ? fetchDetails({
            name: nameRef.current.value,
            email: emailRef.current.value
          })
        : alert('Enter valid Password..')
        : alert('Enter valid Email..')
        console.log(Object.values(details));
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }
    return (
      <div style={{display: "flex", justifyContent: "center", gap: "2in"}}>
        <form onSubmit={handleSubmit}>
            <div style={{marginTop: "25px"}}>
                <label id='b'>Name</label>
                <input style={{marginLeft: "30px", marginTop: "25px"}} type='text' ref={nameRef} required/>
            <label id='b'>Email</label>
                <input style={{marginLeft: "30px", marginTop: "25px"}} type='text' ref={emailRef} required/> 
            <label id='b'>Password</label>
                <input style={{marginLeft: "30px", marginTop: "25px"}} type='password' ref={passwordRef} required/> 
                <div><input type='submit' style={{marginLeft: "1.2in", marginTop: "30px"}} value="LOGIN"/> </div>
                </div>
        </form>
        {
            Object.values(details).length > 0 ?
             <div style={{marginTop: "0.7in", fontSize: "22px", color: "AppWorkspace"}}>
                <p>Name: {details.name}</p>
                <p>Email:  {details.email}</p>
             </div>
        : <></>
        }
        </div>
)
  }
