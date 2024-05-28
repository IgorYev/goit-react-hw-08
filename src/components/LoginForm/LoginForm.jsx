import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

export default function LoginForm() {
  const userNameId = useId();
  const userEmailId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() =>
        toast.success("Successful autorization!", {
          style: {
            padding: "16px",
            color: "green",
            background: "white",
          },
        })
      )
      .catch(() => {
        toast.error("Oops, something went wrong! Try again", {
          style: {
            padding: "20px",
            color: "red",
            fontSize: "16px",
            background: "white",
          },
        });
      });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor={userNameId}>
            Email
            <Field id={userNameId} type="email" name="email" />
          </label>
          <label htmlFor={userEmailId}>
            Password
            <Field id={userEmailId} type="password" name="password" />
          </label>
          <button type="submit">LogIn</button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
}
