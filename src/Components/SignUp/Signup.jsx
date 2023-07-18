import React from 'react'

const Signup = ({signUp}) => {
  return (
    <div className='Sign_Up'>
     <button onClick={signUp} className='Xmarks'><i class="fa-solid fa-xmark"></i></button>
     <h1>Sign-In</h1>
     <form action="">
     <input type="text" placeholder='ENTER USERNAME' required/>
     <input type="email" placeholder='ENTER EMAIL' required/>
     <input type="number" placeholder='ENTER NUMBER' required/>
     <button type='submit'>SUBMIT</button>
     </form>
    </div>
  )
}

export default Signup