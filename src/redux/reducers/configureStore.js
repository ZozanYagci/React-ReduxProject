import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./index"

export default function createConfigureStore(){
 return configureStore({
    reducer:rootReducer
 })
}