import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut} type="button">
        LogOut
      </button>
    </div>
  );
}
