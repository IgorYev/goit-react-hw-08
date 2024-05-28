import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

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
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successful registration!", {
          style: {
            border: "10px solid blue",
            padding: "16px",
            color: "blue",
            background: "white",
          },
        });
      })
      .catch(() => {
        toast.error("Oops, something went wrong! Try again", {
          style: {
            border: "10px solid blue",
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
        <Form className={css.form} autoComplete="off">
          <label className={css.label} htmlFor={userNameId}>
            Username
            <Field
              className={css.field}
              id={userNameId}
              type="text"
              name="name"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label} htmlFor={userEmailId}>
            Email
            <Field
              className={css.field}
              id={userEmailId}
              type="email"
              name="email"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label} htmlFor={userPasswordId}>
            Password
            <Field
              className={css.field}
              id={userPasswordId}
              type="password"
              name="password"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </div>
  );
}
