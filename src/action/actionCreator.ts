import { TypeAtmData } from "../types/typedata";
import * as types from "./actionTypes";

export const get_all_atm = () => ({
  type: types.GET_ATM_DATA,
});

export const api_get_all_atm = (data: TypeAtmData) => ({
  type: types.GET_ATM_DATA,
  payload: data,
});

export const got_atm_succes = (data: TypeAtmData) => ({
  type: types.GOT_ATM_SUCCESS,
  payload: data,
});

export const got_atm_fail = (error: string) => ({
  type: types.GOT_ATM_ERROR,
  payload: error,
});

export const display_transaction_box = (show: boolean) => ({
  type: types.DISPLAY_TRANSACTION_BOX,
  payload: show,
});

export const display_add_atm_box = (show: boolean) => ({
  type: types.DISPLAY_ADD_ATM_BOX,
  payload: show,
});
