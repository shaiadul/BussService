import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavSection from "./Components/NavSection/NavSection";
import Home from "./Pages/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "./Pages/Blogs/Blog";
import BookOnline from "./Pages/BookOnline/BookOnline";
import Payment from "./Pages/payment/Payment";
import GetTicket from "./Pages/GetTicket/GetTicket";
import BusFind from "./Pages/BusFind/BusFind";
import Login from "./Pages/Login/Login";
import Forget from "./Pages/Login/Forget";
import SignUp from "./Pages/Login/SignUp";
import Otp from "./Pages/Login/Otp";
import Information from "./Pages/Getway/Information";
import PaymentOption from "./Pages/PaymentOption/PaymentOption";
import Pay from "./Pages/Pay/Pay";
import Error from "./Pages/Error/Error";
import { createContext } from "react";
import { useState } from "react";
import NewPass from "./Pages/Login/NewPass";
import OtpForget from "./Pages/Login/OtpForget";
export const contextBlogs = createContext();
export const contextUser = createContext();
export const contextForgetEmail = createContext();
export const contextLogToken = createContext();

function App() {
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({});
  const [emailForget, setEmailForget] = useState("");
  const [logToken, setLogToken ] = useState("");
  const [currentBlog, setCurrentBlog] = useState({
    id: 1,
    title: "Bus strike across Punjab over outsourcing of drivers",
    body: "A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.",
    thumbnail: "https://i.ytimg.com/vi/tfkBwcZ7ON0/maxresdefault.jpg",
    publisher: "Saidul Basar",
    photo:
      "https://pps.whatsapp.net/v/t61.24694-24/311559064_1207887039766090_914456334442507768_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdS2U0RfvGGhDrQoryibMWZN8pGGpJ4qjnQWMjHJou7vEA&oe=64391CB4",
    date: "20 Jan, 2023",
  });
  const blogValue = { currentBlog, setCurrentBlog };
  const userValue = { userInfo, setUserInfo };
  const forgetEmail = { emailForget, setEmailForget };
  const logTokenValue = { logToken, setLogToken };
  return (
    <>
      <div className=" mx-auto">
        <contextLogToken.Provider value={logTokenValue}>
          <contextForgetEmail.Provider value={forgetEmail}>
            <contextUser.Provider value={userValue}>
              <contextBlogs.Provider value={blogValue}>
                {location.pathname !== "/login" &&
                  location.pathname !== "*" &&
                  location.pathname !== "/signUp" &&
                  location.pathname !== "/forget" &&
                  location.pathname !== "/NewPass" &&
                  location.pathname !== "/otpForget" &&
                  location.pathname !== "/otp" && <NavSection />}

                <Routes>
                  <Route path="/" element={<Home></Home>} />
                  <Route path="home" element={<Home></Home>} />
                  <Route path="blog" element={<Blog></Blog>} />
                  <Route
                    path="bookOnline"
                    element={<BookOnline></BookOnline>}
                  />
                  <Route path="payment" element={<Payment></Payment>} />
                  <Route path="getTicket" element={<GetTicket></GetTicket>} />
                  <Route path="busFind" element={<BusFind></BusFind>} />
                  <Route
                    path="information"
                    element={<Information></Information>}
                  />
                  <Route
                    path="paymentOption"
                    element={<PaymentOption></PaymentOption>}
                  />
                  <Route path="pay" element={<Pay></Pay>} />
                  <Route path="login" element={<Login></Login>} />
                  <Route path="signUp" element={<SignUp></SignUp>} />
                  <Route path="otp" element={<Otp></Otp>} />
                  <Route path="otpForget" element={<OtpForget></OtpForget>} />
                  <Route path="forget" element={<Forget></Forget>} />
                  <Route path="NewPass" element={<NewPass></NewPass>} />
                  <Route path="*" element={<Error></Error>} />
                </Routes>

                {location.pathname !== "/login" &&
                  location.pathname !== "*" &&
                  location.pathname !== "/signUp" &&
                  location.pathname !== "/forget" &&
                  location.pathname !== "/NewPass" &&
                  location.pathname !== "/otpForget" &&
                  location.pathname !== "/otp" && <Footer />}
              </contextBlogs.Provider>
            </contextUser.Provider>
          </contextForgetEmail.Provider>
        </contextLogToken.Provider>
      </div>
    </>
  );
}
export default App;
