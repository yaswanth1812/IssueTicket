import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './registration/login';
import Home from './registration/main/home';
import Navbar from './navbar/navbar';
import Signup from './registration/signup';
import UserProvider from './contextuse/usercontext';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} /> 
          <Route path ="/signup" element={<Signup/>}/>
          {/* <Route path ="/navbar" element ={<Navbar/>}/> */}
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
