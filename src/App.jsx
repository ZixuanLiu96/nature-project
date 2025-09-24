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

import ExplorePage from "./pages/ExplorePage";
import CollectionPage from "./pages/CollectionPage";
import UserOutlinePage from "./pages/UserOutlinePage";
import NewSceneryPage from "./pages/NewSceneryPage";
import FavouritePage from "./pages/FavouritePage";


function App() {
  return (
    <div className="bg-base-300">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route
          path="/users/:id"
          element={
            <ProtectedRoutes>
              <DashboardPage></DashboardPage>
            </ProtectedRoutes>
          }
        >
          <Route index element={<UserOutlinePage />}></Route>
          <Route path="my-collection" element={<CollectionPage />}></Route>
          <Route path="new-scenery" element={<NewSceneryPage />}></Route>
          <Route path="favourite" element={<FavouritePage />}></Route>
        </Route>

        <Route
          path="/users/explore"
          element={
            <ProtectedRoutes>
              <DashboardPage>
                <ExplorePage />
              </DashboardPage>
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
//new protected routes
        <Route path="/users/:id" element={<ProtectedRoutes><SingleSpotPage /></ProtectedRoutes>} />

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
