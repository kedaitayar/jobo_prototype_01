import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import {userApi} from "./api/users";


export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      [userApi.reducerPath]: userApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
   devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   AnyAction
>;
