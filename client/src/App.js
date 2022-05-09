import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarC from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import EditProfile from "./pages/EditProfile";
import ProfilesPro from "./pages/ProfilesPro";
import ProWork from "./pages/ProWork";
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
        <Route path="/service/profils" element={<ProfilesPro />} />
        <Route path="/service/work" element={<ProWork />} />
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
