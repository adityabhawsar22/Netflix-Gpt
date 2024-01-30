import React, {  useState } from 'react'
import Header from './Header'


const Login = () => {

  const[Signinform,SetSigninform]=useState(true);

  const toggleform =()=>{
    SetSigninform(!Signinform);
  };
  


return (

    <div>

<Header/>
<div className=' absolute '>
<img  alt='background' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"/>
</div>
<form className='w-3/12 absolute p-12 text-white bg-black my-36 right-0 left-0 mx-auto opacity-90' >

  <h1 className='text-white font-bold text-3xl  '>{Signinform ? "Sign In" : "Sign Up"} </h1>
  {!Signinform && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}

<input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
<input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
<button className='bg-red-600 text-white p-4 my-6 w-full rounded-lg'> {Signinform ? "Sign In" : "Sign Up"}</button>
<p className='cursor-pointer' onClick={toggleform}> {Signinform ? "New to Netflix ? Sign Up Now" : "Already Registered ? Sign in Now"}</p>
</form>

    </div>
  );
};

export default Login