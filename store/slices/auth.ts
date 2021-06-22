import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InvalidCredentialError } from "../../utils/constants/Errors";
import {changePassword, verifyUser} from "../api/users";

interface AuthState {
   user: string | null;
   userId: string | null
}

const initialState: AuthState = {
   user: null,
   userId: null,
};

type SingInPayload = {
   user: string;
   userId: string;
};

export const authSlice = createSlice({
   name: "auth",
   initialState: initialState,
   reducers: {
      signIn: (state, action: PayloadAction<SingInPayload>) => {
         state.user = action.payload.user;
         state.userId = action.payload.userId
      },
      signOut: (state, action) => {},
   },
   extraReducers: (builder) => {
      builder
         .addCase(verifyUser.fulfilled, (state, action) => {
            if (action.payload) {
               state.user = action.payload.user;
               state.userId = action.payload.userId
            }
         })
         .addCase(verifyUser.rejected, (state, action) => {
            throw action.error;
         })
         .addCase(changePassword.fulfilled, (state, action) => {
            console.log("changePassword.fulfilled")
         })
   },
});
