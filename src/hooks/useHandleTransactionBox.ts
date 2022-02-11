import { FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  display_add_atm_box,
  display_transaction_box,
  get_all_atm,
} from "../action/actionCreator";
import { RootState } from "../reducers/rootReducer";
import { atmService } from "../services/atmService";
import { InitialATM, InitialTransaction } from "../types/typedata";

export function HandleTransactionBox() {
  const dispatch = useDispatch();
  const { transaction: isTransactionBox, atm: isAtmBox } = useSelector(
    (state: RootState) => state.popupBox
  );

  const displayTransactionBox = () => {
    dispatch(display_transaction_box(true));
  };

  const hiddenTransactionBox = () => {
    dispatch(display_transaction_box(false));
  };

  const displayAddAtm = () => {
    dispatch(display_add_atm_box(true));
  };

  const hiddenAddAtm = () => {
    dispatch(display_add_atm_box(false));
  };

  const addTransaction = async (
    values: InitialTransaction,
    FormikHelpers: FormikHelpers<InitialTransaction>
  ) => {
    const { namePeople, transaction } = values;
    const resp = await atmService.addTransaction({
      namePeople: namePeople,
      transaction: transaction,
    });

    if (resp.status !== 200) {
      FormikHelpers.setErrors({ namePeople: "has wrong here !" });
    } else {
      dispatch(display_transaction_box(false));
      dispatch(get_all_atm());
    }
  };

  const addNewAtm = async (
    values: InitialATM,
    formikHelpers: FormikHelpers<InitialATM>
  ) => {
    const resp = await atmService.addAtm({
      name: values.name,
    });
    if (resp.status !== 200) {
      formikHelpers.setErrors({ name: "has wrong here" });
    } else {
      dispatch(display_add_atm_box(false));
    }
  };

  const addNew: any = isTransactionBox
    ? addTransaction
    : isAtmBox
    ? addNewAtm
    : () => {};
  const hiddenBox: any = isTransactionBox
    ? hiddenTransactionBox
    : isAtmBox
    ? hiddenAddAtm
    : () => {};

  const isDataBox = isTransactionBox ? "transaction" : isAtmBox ? "atm" : "";

  return {
    isDataBox,
    displayTransactionBox,
    displayAddAtm,
    hiddenAddAtm,
    hiddenTransactionBox,
    addTransaction,
    addNew,
    hiddenBox,
  };
}
