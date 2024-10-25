import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchData } from "../src/store/actions/dataActions";
import "./App.css";
import { RootState } from "./store/index";

import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage/SearchPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage/TermsOfUsePage";
import CookieConsentBanner from "./components/CookieConsentBanner/CookieConsentBanner";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const data = useSelector((state: RootState) => state.yourStateSlice.data);
  const loading = useSelector(
    (state: RootState) => state.yourStateSlice.loading
  );
  const error = useSelector((state: RootState) => state.yourStateSlice.error);

  useEffect(() => {
    const cookieConsent = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookieConsent='));
    
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number): void => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const handleAccept = (): void => {
    setCookie('cookieConsent', 'accepted', 30); // Set for 30 days
    setIsBannerVisible(false);
  };

  const handleDecline = (): void => {
    setCookie('cookieConsent', 'declined', 30); // Set for 30 days
    setIsBannerVisible(false);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data, "data");
  return (
    <div className="App">
      <main className="bg-gray-dark text-white grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/termsofuse" element={<TermsOfUsePage />} />
        </Routes>
        <Footer />
        {isBannerVisible && (
          <CookieConsentBanner onAcceptClick={handleAccept} onDeclineClick={handleDecline} />
        )}
      </main>
    </div>
  );
}

export default App;
