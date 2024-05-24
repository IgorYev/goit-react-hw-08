import { useDispatch } from "react-redux";

export default function UserMenu(){
const dispatch = useDispatch();
const user = useSelector(selectUser);

const handleLogOut = () => {
    dispatch(logOut());
}
return (

    <div>
        <p>
            <button type="button">Logout

            </button>
        </p>
    </div>
)
}