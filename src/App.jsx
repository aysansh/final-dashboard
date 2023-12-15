import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ForgetPasswordPage from "./pages/auth/ForgetPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/dashboard/Dashboard.page"
// import PricingPage from "./pages/pricing/PricingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forget" element={<ForgetPasswordPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<Error404 />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
