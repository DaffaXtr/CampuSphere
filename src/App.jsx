
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ExplorePage from './pages/explore/ExplorePage';
import EventDetailPage from './pages/explore/events/EventDetailPage';
import RecruitmentDetailPage from './pages/explore/recruitment/RecruitmentDetailPage';
import RecruitmentApplyPage from './pages/explore/recruitment/RecruitmentApplyPage';
import RecruitmentApplyStep2Page from './pages/explore/recruitment/RecruitmentApplyStep2Page';
import RecruitmentApplyStep3Page from './pages/explore/recruitment/RecruitmentApplyStep3Page';
import RegistrationPage from './pages/explore/events/RegistrationPage';
import TicketSelectionPage from './pages/explore/events/TicketSelectionPage';
import PaymentPage from './pages/explore/events/PaymentPage';
import ConfirmationPage from './pages/explore/events/ConfirmationPage';
import AllEventsPage from './pages/explore/events/AllEventsPage';
import AllRecruitmentsPage from './pages/explore/recruitment/AllRecruitmentsPage';
import MerchandisePage from './pages/merchandise/MerchandisePage';
import MerchDetailPage from './pages/merchandise/MerchDetailPage';
import MerchCheckoutPage from './pages/merchandise/MerchCheckoutPage';
import MerchPaymentPage from './pages/merchandise/MerchPaymentPage';
import MerchSuccessPage from './pages/merchandise/MerchSuccessPage';
import MerchCartPage from './pages/merchandise/MerchCartPage';
import HistoryPage from './pages/profile/HistoryPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/explore" replace />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/events" element={<AllEventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route path="/recruitments" element={<AllRecruitmentsPage />} />
          <Route path="/recruitment/:id" element={<RecruitmentDetailPage />} />
          <Route path="/recruitment/:id/apply" element={<RecruitmentApplyPage />} />
          <Route path="/recruitment/:id/apply/step2" element={<RecruitmentApplyStep2Page />} />
          <Route path="/recruitment/:id/apply/step3" element={<RecruitmentApplyStep3Page />} />
          <Route path="/event/:id/register" element={<RegistrationPage />} />
          <Route path="/event/:id/register/step2" element={<TicketSelectionPage />} />
          <Route path="/event/:id/register/step3" element={<PaymentPage />} />
          <Route path="/event/:id/register/step4" element={<ConfirmationPage />} />
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/merchandise/cart" element={<MerchCartPage />} />
          <Route path="/merchandise/:id" element={<MerchDetailPage />} />
          <Route path="/merchandise/:id/checkout" element={<MerchCheckoutPage />} />
          <Route path="/merchandise/:id/payment" element={<MerchPaymentPage />} />
          <Route path="/merchandise/success" element={<MerchSuccessPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/article" element={<div className="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto"><h1 className="font-headline-xl">Article</h1></div>} />
          <Route path="/about" element={<div className="py-xl px-margin-mobile md:px-margin-desktop max-w-full mx-auto"><h1 className="font-headline-xl">About Us</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
