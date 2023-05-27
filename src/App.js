
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TextForm from './components/textform';
import Alert from './components/alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Userinfo from './components/userinfo';




function App() {
  const [mode,setMode]=useState('light')
const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= "#1b253a"
    showalert('Dark mode is anabled','success')
  }
  else{
  setMode('light')
  document.body.style.backgroundColor= "white"
  showalert('Light mode is anabled','success')
  }
}

const[myalert,setmyAlert]=useState('hello')

const showalert = (message,type)=>{
  setmyAlert({
    msg : message,
    type : type
  })

  setTimeout(() => {
    setmyAlert(null)
  },2000);
}

  return (
    
    <>
    <Router>
<Navbar name1='TextUtils' tab1='Home' tab2='About' tab3='Creator Info' mode={mode} tmode={toggleMode}/>

<Alert msg={myalert} />

<Routes>
          <Route exact path='/about'  element={<About mode ={mode}/>}/>
          
          <Route exact path="/" element={<TextForm showalert={showalert} mode ={mode} btnname1="To UpperCase" btnname2="To LowerCase" btnname3="Clear text "  btnname4="Remove extra spaces"  btnname5 = "Copy Text"/> }/>
          
          <Route exact path='/userinfo' element={<Userinfo mode ={mode}/>} />
        
        </Routes>
        </Router>  

  </>
  
  );

  }

export default App;




