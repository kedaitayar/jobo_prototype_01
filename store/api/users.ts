import { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InvalidCredentialError } from "../../utils/constants/Errors";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const verifyUser = createAsyncThunk(
   "users/verifyUser",
   async (arg: { username: string; password: string }, thunkAPI) => {
      // return thunkAPI.rejectWithValue("test")
      const { username, password } = arg;
      const response = await fetch(
         `https://rn-tutorial-project-default-rtdb.asia-southeast1.firebasedatabase.app/users/${username}.json`
      );
      if (!response.ok) {
         throw Error("Something went wrong with verifyUser function");
         // return thunkAPI.rejectWithValue("Something went wrong with verifyUser function")
         // return thunkAPI.rejectWithValue(Error("Something went wrong with verifyUser function"))
      }

      const responseData = await response.json();
      if (responseData) {
         const data = Object.values(responseData)[0] as any;
         if (data.password) {
            if (data.password === password) {
               return { user: username, userId: Object.keys(responseData)[0] };
            } else {
               throw new InvalidCredentialError();
               // return thunkAPI.rejectWithValue("new InvalidCredentialError().name")
               // return thunkAPI.rejectWithValue(new InvalidCredentialError())
            }
         }
      } else {
         throw new InvalidCredentialError();
         // return thunkAPI.rejectWithValue("new InvalidCredentialError().name")
         // return thunkAPI.rejectWithValue(new InvalidCredentialError())
      }
   }
);

export const registerUser = createAsyncThunk(
   "users/registerUser",
   async (arg: { username: string; password: string }) => {
      const { username, password } = arg;
      const newUser = {
         username: username,
         password: password,
      };
      const response = await fetch(
         `https://rn-tutorial-project-default-rtdb.asia-southeast1.firebasedatabase.app/users/${username}.json`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
         }
      );
      if (!response.ok) {
         throw Error("Something went wrong with verifyUser function");
      }
   }
);

// using createAsyncThunk
export const changePassword = createAsyncThunk("user/changePassword", async (password:string, thunkAPI) => {
   const { auth } = thunkAPI.getState() as RootState
   if (auth.user && auth.userId) {
      const updatedUser = {
         [auth.userId]: {
            username: auth.user,
            password: password,
         },
      };
      const response = await fetch(
         `https://rn-tutorial-project-default-rtdb.asia-southeast1.firebasedatabase.app/users/${auth.user}.json`,
         {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
         }
      );
   }
});

// using createApi
export const userApi = createApi({
   reducerPath: "userApi",
   baseQuery: fetchBaseQuery({
      baseUrl:
         "https://rn-tutorial-project-default-rtdb.asia-southeast1.firebasedatabase.app/",
   }),
   endpoints: (build) => ({
      changePassword: build.mutation({
         query: (arg: { user: string; userId: string; password: string }) => {
            const updatedUser = {
               [arg.userId]: {
                  username: arg.user,
                  password: arg.password,
               },
            };
            return {
               url: `users/${arg.user}.json`,
               method: "PATCH",
               headers: {
                  "Content-Type": "application/json",
               },
               body: updatedUser,
            };
         },
      }),
   }),
});

export const { useChangePasswordMutation } = userApi;
