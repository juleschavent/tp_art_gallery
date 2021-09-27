import Button from "@restart/ui/esm/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {

    const { currentUser, logout } = useAuth();

    return (
        //Logo to go back to root path
        <aside className="header">
            <h2><Link to="/" className="header__title">Art Gallery</Link></h2>
            {!currentUser ?
                <Link to="/login" className="header__login"> Login </Link>
                : <button onClick={logout} className="header__login header__logout">Log out</button>}

        </aside>
    );
}

export default Header;