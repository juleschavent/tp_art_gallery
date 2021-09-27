import { useAuth } from "../context/AuthContext";

const Footer = () => {

    const { currentUser } = useAuth()

    return (
        <footer>User : {currentUser && currentUser.uid}</footer>
    );
}

export default Footer;