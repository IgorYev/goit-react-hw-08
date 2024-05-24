import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";

export default function AppBar() {

const isLoggedIn = useSelector(selectIsLoggedIn)

return (
    <header>
        <Navigation/>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
)

}