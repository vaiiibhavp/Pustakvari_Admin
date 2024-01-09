import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Layout/MainContent";
import AuthLayout from "./Layout/AuthLayout";
import LoginForm from "./Pages/AuthPages/Login";
import ForgotPasswordForm from "./Pages/AuthPages/ForgotPassword";
import ResetPasswordForm from "./Pages/AuthPages/ConfirmPassword";
import OtpValidation from "./Pages/AuthPages/OtpValidation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm />} />
          <Route path="/otpValidation" element={<OtpValidation />} />
          <Route path="/reset" element={<ResetPasswordForm />} />
        </Route>
        <Route element={<MainContent />}>
          <Route path="/" element={"hello"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
