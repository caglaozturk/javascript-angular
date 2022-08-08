import { createReducer, on } from '@ngrx/store';
import { removeTokenUserModel, setTokenUserModel } from '../actions/auth.actions';

import { TokenUserModel } from '../../models/tokenUserModel';

export interface AuthState {
    // ? bu değer null veya undefined olabilir
    tokenUserModel?: TokenUserModel;
}

const initialAuthState: AuthState = {
  tokenUserModel: undefined
};

// const state = {
//   tokenUserModel: "VERİ"
// }; // x05312132

// on(removeTokenUserModel, state => {
//     state.tokenUserModel = undefined;
//     return state;
// }),

// const state = {
//   tokenUserModel: undefined
// }; // x05312132

export const authReducer = createReducer(
  initialAuthState,
  on(setTokenUserModel, (state, action) => {
    // 1. paramtere o anki state değeri, 2. parametre üzerinde çalıştığımız action
    return { ...state, tokenUserModel: action.tokenUserModel };
  }),
  on(removeTokenUserModel, state => {
    const newState: AuthState = { ...state, tokenUserModel: undefined }; // x48746546
    return newState;
  })
);
// state = {
//     tokenUserModel: action.tokenUserModel
// } // x48746546