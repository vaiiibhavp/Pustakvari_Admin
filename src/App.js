import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import InstitutesDetail from "./Pages/Institutes/InstitutesDetail";
import CreateQuiz from "./Pages/Quiz/CreateQuiz";
import PaymentTracking from "./Pages/InstituteAdmin/PaymentTrackings";
import InstituteLayout from "./Layout/InstituteLayout";
import { useSelector } from "react-redux";
import useUserTypeName from "./Hooks/IsCheckAuth";

const App = () => {
  const InstituteAdmin = useUserTypeName();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="/forgot" element={<ForgotPasswordForm />} />
          <Route path="/otpValidation" element={<OtpValidation />} />
          <Route path="/reset" element={<ResetPasswordForm />} />
          {/* <Route path="/modal" element={<DeleteModal />} /> */}
        </Route>
        <Route element={InstituteAdmin ? <InstituteLayout /> : <MainContent />}>
          {/* above three for use for admin and superadmin both */}
          <Route path="/Payments" element={<PaymentTracking />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/User" element={<Users />} />
          <Route path="/Institute" element={<Institutes />} />
          <Route path="/institute/:id" element={<InstitutesDetail />} />
          {/* CreateQuiz */}
          <Route path="/e-books" element={<EBooks />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/createquize" element={<CreateQuiz />} />
          <Route path="/Subscription" element={<Subscription />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
