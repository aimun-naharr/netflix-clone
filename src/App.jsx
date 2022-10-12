import "./App.css";
import HomeScreen from "./Pages/Homescreen/HomeScreen";
import LoginScreen from "./Pages/loginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "./Components/Loader";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, selectUser } from "./features/userSlice";
import ProfileScreen from "./Pages/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({ id: user.uid, email: user.email }));
      } else {
        dispatch(logOut());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
