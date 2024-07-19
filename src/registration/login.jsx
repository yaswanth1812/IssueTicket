import React, { useState } from 'react'
import Home from './main/home'
import { Link, useNavigate } from 'react-router-dom'
import '../registration/login.css'
import { useUser } from '../contextuse/usercontext'

const Login = () => { 
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {setUser} = useUser();
  const [userid,setUserid] = useState('');

  const handleLogin = () =>{
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if(storedUser && storedUser.email === email && storedUser.password === password){
      setUser(storedUser);
      navigate('/home')
    }
    else{
      alert('Invalid email or password Please "Sign-in" if ur a new user')
    }
  }

  const handleSignup = () => {
    navigate('/signup');
  };

 
  return (
    <div className='form'>
      <h2>Login</h2>
          <form onSubmit={(e)=>{e.preventDefault();handleLogin();}}>
          <div>
              <label className='label'>UserId:</label>
              <input type="number"
              className='input'
              value={userid}
              onChange={(e)=>setUserid(e.target.value)}
              required/>
            </div>
            <div>
              <label className='label'>Email:</label>
              <input type="email"
              className='input'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required/>
            </div>
            <div>
              <label className='label'>Password:</label>
              <input type='password'
              value={password}
              className='input'
              onChange={(e)=>setPassword(e.target.value)}
              required />
            </div>
            <button type='submit' className='btn'>LOGIN</button>
            <div className='sigbtn'>
            <button onClick={handleSignup} className='btn'>SIGNUP</button>
            <p className='par'>SignUp here if you are new user</p>
            </div>
          </form>
    </div>
  )
}

export default Login