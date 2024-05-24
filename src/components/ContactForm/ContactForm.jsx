import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const telId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50, "Too long!").required("Required"),
    number: Yup.number().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values) => {
        dispatch(addContact(values));
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.formField}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formField}>
          <label htmlFor={telId}>Phone</label>
          <Field name="number" id={telId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
