import * as types from "../action/actionTypes";
import { TypeAtmData } from "../types/typedata";

interface ActionAtmReducer {
  type: string;
  payload: any;
}

const initialState: TypeAtmData = {
  atm: [],
  processedClient: "",
  queue: [],
};

const atmReducer = (state = initialState, action: ActionAtmReducer) => {
  switch (action.type) {
    case types.GET_ATM_DATA:
      if (action.payload) {
        const { atm, processedClient, queue } = action.payload;

        return { atm: atm, processedClient: processedClient, queue: queue };
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default atmReducer;
