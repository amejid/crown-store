import {AnyAction} from "@reduxjs/toolkit";
import {UserData} from "../../utils/firebase/firebase.utils";
import {signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if(signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if(signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
    return { ...state, error: action.payload};
  }

  if(signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
};

export default userReducer;
