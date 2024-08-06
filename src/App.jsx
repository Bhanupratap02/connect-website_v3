/** @format */

import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePg from "./pages/HomePg";
import BlogsPg from "./pages/BlogsPg";
import BlogContent from "./pages/BlogContent";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import PreLoader from "./components/Loader";
const App = () => {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      {!isPreloaderComplete && (
        <PreLoader onComplete={() => setIsPreloaderComplete(true)} />
      )}
      {isPreloaderComplete && (
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePg />} />
            <Route path="/blogs" element={<BlogsPg />} />
            <Route path="/blog/:id" element={<BlogContent />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Routes>
          <CookieConsent />
        </ScrollToTop>
      )}
    </>
  );
};

export default App;
