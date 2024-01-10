import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./Layout/MainContent";
import AuthLayout from "./Layout/AuthLayout";
import LoginForm from "./Pages/AuthPages/Login";
import ForgotPasswordForm from "./Pages/AuthPages/ForgotPassword";
import ResetPasswordForm from "./Pages/AuthPages/ConfirmPassword";
import OtpValidation from "./Pages/AuthPages/OtpValidation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Subscription from "./Pages/Subscription/Subscription";
import Quiz from "./Pages/Quiz/Quiz";
import EBooks from "./Pages/Ebook/EBooks";
import Users from "./Pages/User/Users";
import Institutes from "./Pages/Institutes/Institutes";
import Notifications from "./Pages/Notification/Notifications";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm />} />
          <Route path="/otpValidation" element={<OtpValidation />} />
          <Route path="/reset" element={<ResetPasswordForm />} />
          {/* <Route path="/modal" element={<DeleteModal />} /> */}
        </Route>
        <Route element={<MainContent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/User" element={<Users />} />
          <Route path="/Institute" element={<Institutes />} />
          <Route path="/e-books" element={<EBooks />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
