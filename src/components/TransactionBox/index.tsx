import { TransactionBoxStyled } from "./style";
import atmImage from "../../assets/image/atm.png";
import userImage from "../../assets/image/user.png";
import { Form, Formik } from "formik";
import InputCustome from "../InputCustome";
import {
  createAtmSchema,
  createTransactionSchema,
  initialValueATM,
  initialTransaction,
} from "./transactionbox";
import { HandleTransactionBox } from "../../hooks/useHandleTransactionBox";

const TransactionBox = () => {
  const { isDataBox, addNew, hiddenBox } = HandleTransactionBox();
  const initialValues: any =
    isDataBox === "transaction" ? initialTransaction : initialValueATM;

  return (
    <TransactionBoxStyled>
      <div className="box">
        <h5 className="box-heading">
          {isDataBox === "transaction" ? "Create Transaction" : "create ATM"}
        </h5>
        <div className="box-image">
          <img
            src={isDataBox === "transaction" ? userImage : atmImage}
            alt="img"
          />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={
            isDataBox === "transaction"
              ? createTransactionSchema
              : createAtmSchema
          }
          onSubmit={addNew}
        >
          <Form>
            <div>
              <InputCustome
                name={isDataBox === "transaction" ? "namePeople" : "name"}
                placeholder={
                  isDataBox === "transaction" ? "add user name" : "add Atm"
                }
                type="text"
              ></InputCustome>
            </div>
            <div>
              {isDataBox === "transaction" && (
                <InputCustome
                  name="transaction"
                  placeholder="add transaction number"
                  type="text"
                ></InputCustome>
              )}
            </div>
            <div className="btn-group">
              <button className="btn btn-create" type="submit">
                create
              </button>
              <button
                className="btn btn-cancle"
                type="button"
                onClick={hiddenBox}
              >
                cancle
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </TransactionBoxStyled>
  );
};

export default TransactionBox;
