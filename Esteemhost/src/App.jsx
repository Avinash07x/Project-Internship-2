import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
// import ForgotPassword from "./Pages/ForgotPassword";
import DomainRegistrationPage from "./Pages/DomainsPages/Registration/DomainRegistrationPage";
import BulkDomainRegistrationPage from "./Pages/DomainsPages/Registration/BulkDomainRegistrationPage";
import NewDomainExtensionsPage from "./Pages/DomainsPages/Registration/NewDomainExtensionsPage";
import PremiumDomainsPage from "./Pages/DomainsPages/Registration/PremiumDomainsPage";
import DomainTransferPage from "./Pages/DomainsPages/Transfer/DomainTransferPage";
import BulkDomainTransferPage from "./Pages/DomainsPages/Transfer/BulkDomainTransferPage";
import DomainResellerPage from "./Pages/DomainsPages/Other-Add-ons-page/DomainResellerPage";
import FreeWithDomainPage from "./Pages/DomainsPages/Other-Add-ons-page/FreeWithDomainPage";
import NameSuggestionToolPage from "./Pages/DomainsPages/Other-Add-ons-page/NameSuggestionToolPage";
import WhoisLookupPage from "./Pages/DomainsPages/Other-Add-ons-page/WhoisLookupPage";
import PaymentPage from "./Pages/PaymentPage";
import Paypage from "./Pages/Paypage";
import AboutUsPage from "./Pages/AboutPage/About/AboutUsPage";
import InfrastructurePage from "./Pages/AboutPage/About/InfrastructurePage";
import OurServicesPage from "./Pages/AboutPage/Services/OurServicesPage";
import TermsConditionsPage from "./Pages/AboutPage/Services/TermsConditionsPage";
import OurPartnersPage from "./Pages/AboutPage/Partners/OurPartnersPage";
import FestiveOfferPage from "./Pages/Offer/FestiveOfferPage";
import VerifyEmail from "./Pages/VerifyEmail.JSX";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          {/* <Route path="/passwordreset" element={<ForgotPassword />} /> */}
          <Route path="/domain-registration" element={<DomainRegistrationPage />} />
          <Route path="/Bulk-domain-registration" element={<BulkDomainRegistrationPage />} />
          <Route path="/new-extensions" element={<NewDomainExtensionsPage />} />
          <Route path="/premium-domains" element={<PremiumDomainsPage />} />
          <Route path="/transfer-domain" element={<DomainTransferPage />} />
          <Route path="/bulk-transfer" element={<BulkDomainTransferPage />} />
          <Route path="/domain-reseller" element={<DomainResellerPage />} />
          <Route path="/free-services" element={<FreeWithDomainPage />} />
          <Route path="/name-suggestion" element={<NameSuggestionToolPage />} />
          <Route path="/whois" element={<WhoisLookupPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/pay" element={<Paypage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/terms" element={<TermsConditionsPage />} />
          <Route path="/partners" element={<OurPartnersPage />} />
          <Route path="/republic-day-offer" element={<FestiveOfferPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
