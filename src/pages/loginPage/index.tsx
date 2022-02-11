import { Form, Formik } from "formik";
import InputCustome from "../../components/InputCustome";
import { initialValue, SignInSchema } from "./login";
import { LoginPageShow } from "./style";
import useSignInForm from "./useSignInForm";

function LoginPage() {
  const { changForm, isSignIn, handleSubmitForm } = useSignInForm();

  return (
    <LoginPageShow>
      <Formik
        initialValues={initialValue}
        validationSchema={SignInSchema}
        onSubmit={handleSubmitForm}
      >
        <Form>
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <div className="input-form">
            <label htmlFor="email">Email: </label>
            <InputCustome name="email" placeholder="email" type="email" />
          </div>
          <div className="input-form">
            <label htmlFor="email">Password: </label>
            <InputCustome
              name="password"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="btn">
            <button className="btn-signin" type="submit">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="btn">
            <button className="btn-signup" type="submit" onClick={changForm}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </Form>
      </Formik>
    </LoginPageShow>
  );
}

export default LoginPage;
