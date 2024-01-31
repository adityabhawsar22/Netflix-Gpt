import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const name =useRef(null);
  const email = useRef(null);
  const password = useRef(null);
const dispatch=useDispatch();
  const [Signinform, SetSigninform] = useState(true);
const [errormessage,seterrormessage]=useState(null);
const navigate =useNavigate();
  const toggleform = () => {
    SetSigninform(!Signinform);
  };

  const handleButtonclick = () => {

    const message = checkValidate(email.current.value, password.current.value);
    seterrormessage(message);
    if(message)return ; 

//sign up logic
if(!Signinform){

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    // ...
    updateProfile(auth.currentUser, {
      displayName: name.current.value, photoURL:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    
    }).then(() => {
      // Profile updated!
      // ...
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/Browse");

    }).catch((error) => {
      // An error occurred
      // ...
    });
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    seterrormessage(errorMessage);
  });
}

//sign in logic
else{
  
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   




    navigate("/Browse");

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  seterrormessage(errorCode+" "+errorMessage);
  });



}

  

  };

  return (
    <div>
      <Header />
      <div className=" absolute ">
        <img
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 text-white bg-black my-36 right-0 left-0 mx-auto opacity-90"
      >
        <h1 className="text-white font-bold text-3xl  ">
          {Signinform ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!Signinform && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

  <input
        ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
        ref={password} 
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <h2 className="text-red-500 font-semibold">{errormessage}</h2>
        <button
          onClick={handleButtonclick}
          className="bg-red-600 text-white p-4 my-6 w-full rounded-lg"
        >
          {" "}
          {Signinform ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleform}>
          {" "}
          {Signinform
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
