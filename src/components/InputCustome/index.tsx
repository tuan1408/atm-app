import React, { FC } from "react";
import { ErrorMessage, Field } from "formik";

interface MyProps {
  name: string;
  placeholder: string;
  type: string;
}

const InputCustome: FC<MyProps> = ({ name, placeholder, type }) => {
  return (
    <>
      <Field id={name} name={name} placeholder={placeholder} type={type} />
      <ErrorMessage name={name}></ErrorMessage>
    </>
  );
};

export default InputCustome;
