import * as Yup from "yup";
import { InitialATM, InitialTransaction } from "../../types/typedata";

export const initialTransaction: InitialTransaction = {
  namePeople: "",
  transaction: "",
};

export const createTransactionSchema = Yup.object().shape({
  namePeople: Yup.string().required("this field is required"),
  transaction: Yup.string().required("this field is required"),
});

export const initialValueATM: InitialATM = {
  name: "",
};

export const createAtmSchema = Yup.object().shape({
  name: Yup.string().required("this field is required"),
});
