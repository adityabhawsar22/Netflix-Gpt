import { configureStore } from "@reduxjs/toolkit";
import usereducer from "./userSlice";
const appstore= configureStore(
    {
        reducer:{
            user:usereducer
        }
    }
)

export default appstore;