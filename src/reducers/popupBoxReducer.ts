import * as types from "../action/actionTypes";

import {
  ActionAddAtmReducer,
  ActionTransactionReducer,
} from "../types/typedata";

const popupReducer = (
  state = { transaction: false, atm: false },
  action: ActionTransactionReducer | ActionAddAtmReducer
) => {
  switch (action.type) {
    case types.DISPLAY_TRANSACTION_BOX: {
      const { transaction, atm } = state;
      return { transaction: action.payload, atm };
    }
    case types.DISPLAY_ADD_ATM_BOX: {
      const { transaction, atm } = state;
      return { atm: action.payload, transaction };
    }
    default:
      return { ...state };
  }
};

export default popupReducer;
