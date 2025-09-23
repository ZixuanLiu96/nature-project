import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./pages/ErrorPage";
import { Footer } from "./components/Footer";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SingleSpotPage from "./pages/SingleSpotPage";

function App() {
  return (
    <div className="bg-base-300">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/users/:id" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        <Route path="/users/:id" element={<ProtectedRoutes><SingleSpotPage /></ProtectedRoutes>} />
      </Routes>

     
      <Footer></Footer>
    </div>
  );
}

export default App;
