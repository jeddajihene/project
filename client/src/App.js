import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarC from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import EditProfile from "./pages/EditProfile";
import Photographers from "./pages/Photographers";
import Pastrys from "./pages/Pastrys";
import Decorators from "./pages/Decorators";
import Animators from "./pages/Animators";
import Profile from "./pages/Profile";
import PrivateRoute from "./routers/PrivateRoute";
import { useDispatch } from "react-redux";
import { loadUserAction } from "./redux/Actions/userActions";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loadUserAction());
    }
  }, [localStorage.getItem("token")]);
  return (
    <div className="App">
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/photographers" element={<Photographers />} />
        <Route path="/service/pastrys" element={<Pastrys />} />
        <Route path="/service/decorators" element={<Decorators />} />
        <Route path="/service/animators" element={<Animators />} />
        <Route path="/service/profile/:id" element={<Profile />} />
        <Route
          path="/edit-profile"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
