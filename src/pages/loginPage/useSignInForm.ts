import { AxiosResponse } from "axios";
import { FormikHelpers } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginServices } from "../../services/loginService";
import { FormValues } from "./login";

function useSignInForm() {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const handleSubmitForm = isSignIn ? handleLogin : handleSignUp;
  const changForm = () => {
    setIsSignIn(!isSignIn);
  };

  async function handleLogin(
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) {
    try {
      const { email, password } = values;
      const resp: AxiosResponse = await loginServices.login({
        email,
        password,
      });
      const { data } = resp;

      if (resp && resp.status === 200) {
        if (data && !data.sign && data.message === "wrong password !") {
          formikHelpers.setErrors({ email: "email or password is wrong !" });
        } else if (data && data.user && data.PRIVATE_TOKEN) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("err:", error);
    }
  }

  async function handleSignUp(
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) {
    try {
      const { email, password } = values;
      console.log(email, password);
      const resp: AxiosResponse = await loginServices.register({
        email,
        password,
      });
      if (resp.data === "email already exists !") {
        alert("email is exist");
      }

      if (
        resp &&
        resp.status === 200 &&
        resp.data !== "email already exists !"
      ) {
        navigate("/");
      }
    } catch (error) {
      console.log("err:", error);
    }
  }

  return { isSignIn, handleSubmitForm, changForm };
}

export default useSignInForm;
