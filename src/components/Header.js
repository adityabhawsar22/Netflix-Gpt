import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        // ...
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/Browse');
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });

    return ()=>unsubscribe();
        },[]);

  const user=useSelector((store)=>store.user);
  const handleclick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="  py-2 px-8 w-screen  absolute z-10 bg-gradient-to-b from-black flex justify-between">
      <div>
        <img
          className="w-44"
          alt=" logo "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
   {  user && (<div className="p-2 flex">
        <img
          className="w-12 h-12 m-2"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <button onClick={handleclick} className="font-bold text-white">
  
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
