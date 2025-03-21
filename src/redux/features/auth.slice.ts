import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type TUser = {
    role:string;
    userId:string;
}

type TInitilaState = {
    user: TUser | null;
    token: null | string;
}
const initialState: TInitilaState = {
    user: null,
    token: null,
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token= token;
        },
        logOut: (state) =>{
            state.user=null;
            state.token = null;
        }
    }
})



export const {setUser, logOut} = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;