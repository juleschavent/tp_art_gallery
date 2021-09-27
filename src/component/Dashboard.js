import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

//Landing page / Dashboard
const Dashboard = () => {

    const { currentUser } = useAuth();

    return (
        <section className="dashboard">
            <h1 className="dashboard__title">Gallery Dashboard</h1>
            <Link to="/gallery" className="dashboard__btn"> Visit the gallery </Link>
            {currentUser && currentUser.isAnonymous === false && <Link to="createArt" className="dashboard__btn">Had a new piece of art</Link>}
        </section>
    );
}

export default Dashboard;