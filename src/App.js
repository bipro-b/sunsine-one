
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Pages/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home';
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";
// import PrivateRoute from "../src/Pages/PrivateRoute/PrivateRoute";
import Shipping from "../src/Pages/Shipping/Shipping";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="/car/:carId" element={<Shipping />} >
            </Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
