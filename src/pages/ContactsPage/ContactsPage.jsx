import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div>
      <PageTitle>Your contacts ...</PageTitle>
      <div className={css.wrapper}>
        <ContactForm />
        <ContactPhoneIcon className={css.icon} sx={{ fontSize: 60 }} />
        <SearchBox />
      </div>

      <ContactList />
    </div>
  );
}
