import * as Yup from "yup";
export interface FormValues {
  email: string;
  password: string;
}

export const initialValue: FormValues = { email: "", password: "" };
export const SignInSchema = Yup.object().shape({
  email: Yup.string().required("email is required"),
  password: Yup.string().required("password is required"),
});
