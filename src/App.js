import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Layout/MainContent";
import AuthLayout from "./Layout/AuthLayout";
import LoginForm from "./Pages/AuthPages/Login";
import ForgotPasswordForm from "./Pages/AuthPages/ForgotPassword";
import ResetPasswordForm from "./Pages/AuthPages/ConfirmPassword";
import OtpValidation from "./Pages/AuthPages/OtpValidation";
import ShowsMessageModal from "./Component/ShowMessageModal";
import DeleteModal from "./Component/DeleteModal";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm />} />
          <Route path="/otpValidation" element={<OtpValidation />} />
          <Route path="/reset" element={<ResetPasswordForm />} />
          <Route path="/modal" element={<DeleteModal />} />
        </Route>
        <Route element={<MainContent />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
