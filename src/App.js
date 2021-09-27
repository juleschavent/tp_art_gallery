import './App.css';
import Login from './component/Login';
import { useAuth } from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './component/Dashboard';
import Gallery from './component/Gallery';
import CreateArt from './component/CreateArt';
import Header from './component/Header';
import ReqContextProvider from './context/ReqContext';
import ArtDetails from './component/ArtDetails';
import Footer from './component/Footer';

function App() {

  const { currentUser } = useAuth();

  return (
    <ReqContextProvider>
      <main>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/artdetails/:id">
              <ArtDetails />
            </Route>
            <Route path="/createArt">
              <CreateArt />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </main>
    </ReqContextProvider>
  );
}

export default App;
