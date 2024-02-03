import { configureStore } from "@reduxjs/toolkit";
import usereducer from "./userSlice";
import moviereducer from "./movieSlice"

const appstore= configureStore(
    {
        reducer:{
            user:usereducer,
            movie:moviereducer,
        }
    }
)

export default appstore;