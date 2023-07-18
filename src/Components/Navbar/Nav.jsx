import React,{useEffect,useState} from 'react'
import './Nav.css'
import Signup from '../SignUp/Signup';


function Nav() {
  const [show, handleShow] = useState(false);
  const [signin,setSignin]= useState(false)
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY>0){
        handleShow(true);
      }
      else{
        handleShow(false);
      }
    });
  
    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);

  const signUp=()=>{
     setSignin(!signin)
  }
  
  return (
 <div className=''>
   {signin ? (
    <Signup signUp={signUp}/>
   ): (
  
    <div className={`header ${show && "header_black"}`}>
       
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className='header_logo' />
   <button onClick={signUp}> <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" className='header_avatar'/></button>
  </div>
)}
 </div>
  )
}

export default Nav