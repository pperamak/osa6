import { createSlice } from "@reduxjs/toolkit"

const initialState=null

const notificationSlice=createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification(state, action){
            console.log(action.payload)
            return action.payload
        }
    }
})
export const { setNotification } = notificationSlice.actions

export const showNotification = ( content, time ) =>{
    return dispatch=>{
        dispatch(setNotification(content))
        setTimeout(()=> dispatch(setNotification(null)), time * 1000)
    }
}

export default notificationSlice.reducer