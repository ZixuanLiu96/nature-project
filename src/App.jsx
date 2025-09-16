import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div>this is our nature project!</div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/users/:id" element={<DashboardPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
