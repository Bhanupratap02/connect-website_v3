

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePg from "./pages/HomePg";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
   const action = useNavigationType();
   const location = useLocation();
   const pathname = location.pathname;
  return (
    <ScrollToTop>
      <Routes >
        <Route path="/" element={<HomePg />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
