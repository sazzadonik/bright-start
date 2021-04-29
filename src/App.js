import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddClass from './components/Admin/AddClass/AddClass';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddTeacher from './components/Admin/AddTeacher/AddTeacher';
import AddReview from './components/User/AddReview/AddReview';
import Home from './components/Home/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import BookClass from './components/User/BookClass/BookClass';
import UserBooked from './components/User/UserBooked/UserBooked';
import BookedClasses from './components/Admin/BookedClasses/BookedClasses';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashBord from './components/Shared/DashBord/DashBord';

export const LoggedInContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <LoggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/user/bookClass">
            <BookClass />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin/bookedClasses">
            <BookedClasses />
          </PrivateRoute>
          <PrivateRoute path="/dashbord">
            <DashBord />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </LoggedInContext.Provider>
  );
}

export default App;
