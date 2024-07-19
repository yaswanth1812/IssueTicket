import React, { useState } from 'react'
import '../registration/signup.css'

const Signup = () => {
    const [name,setName] = useState ('');
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const [userid,setUserid] =useState('');


    const [submitted,setSubmitted] =useState(false);
    const [error,setError] =useState(false);

    const handleUserid = (e)=>{
        setUserid(e.target.value);
        setSubmitted(false);
    }

    const handleName = (e) =>{
        setName(e.target.value);
        setSubmitted(false);
    }

    
    const handleEmail = (e) =>{
        setEmail(e.target.value);
        setSubmitted(false);
    }

      
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setSubmitted(false);
    }
   const handleSubmit =(e)=>{
    e.preventDefault();
    if(name === "" || email === "" || password === ""){
        setError(true);
    }
    else{
        const user={name,email,password};
        localStorage.setItem('user',JSON.stringify(user));
        setError(false);
        setSubmitted(true);
    }
    }
    const successMessage = () =>{
           return(
            <div className='success'
            style={{display:submitted ? "" : "none",}}
            >
                <h1>User {name} succesfully registered !!</h1>
            </div>
           )
    };

   const errorMessage = ()=>{
    return(
        <div className='error'
        style={{
            display:error ? "" : "none"
        }} >
        <h1>Please provide valid info</h1>
        </div>
    )
   }

  return (
       <div className='form'>
        <div>
            <div className='messages'>
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
            <label className='label'>UserID</label>
                <input onChange={handleUserid}
                className='input'
                value={userid}
                type='number'
                />
                <label className='label'>Name</label>
                <input onChange={handleName}
                className='input'
                value={name}
                type='text'
                />

<label className='label'>Email</label>
                <input onChange={handleEmail}
                className='input'
                value={email}
                type='email'
                />

<label className='label'>Password</label>
                <input onChange={handlePassword}
                className='input'
                value={password}
                type='password'
                />
                <button onClick={handleSubmit} className='btn' type="submit" >
                    submit
                </button>

            </form>
        </div>
       </div>
  )
}

export default Signup    



