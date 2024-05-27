import { useDispatch } from "react-redux";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const userNameId = useId();
  const userNumberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() =>
        toast.success("Your contact has been saved !!!", {
          style: {
            border: "10px solid yellow",
            padding: "16px",
            color: "green",
            background: "white",
          },
        })
      )
      .catch(() => {
        toast.error("Oops, something went wrong!!! Try again", {
          style: {
            border: "10px solid yellow",
            padding: "20px",
            color: "red",
            fontSize: "16px",
            background: "white",
          },
        });
      });
    actions.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <label className={css.text} htmlFor={userNameId}>
          Name
          <Field className={css.field} name="name" id={userNameId} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>

        <label className={css.text} htmlFor={userNumberId}>
          Number
          <Field className={css.field} name="number" id={userNumberId} />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
