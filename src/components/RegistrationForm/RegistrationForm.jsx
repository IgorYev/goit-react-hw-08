import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

export default function RegistrationForm() {
  const userNameId = useId();
  const userEmailId = useId();
  const userPasswordId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!    ")
      .max(50, "Too Long!    ")
      .required("Required    "),
    email: Yup.string()
      .email("Must be a valid email!     ")
      .required("Required    "),
    password: Yup.string()
      .min(7, "Too Short!     ")
      .max(50, "Too Long!     ")
      .required("Required     "),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successful registration!", {
          style: {
            padding: "16px",
            color: "blue",
            background: "white",
          },
        });
      })
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
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form autoComplete="off">
          <label htmlFor={userNameId}>
            Username
            <Field id={userNameId} type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label htmlFor={userEmailId}>
            Email
            <Field id={userEmailId} type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label htmlFor={userPasswordId}>
            Password
            <Field id={userPasswordId} type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
}
