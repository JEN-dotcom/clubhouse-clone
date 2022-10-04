import './App.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import CodeConfirm from './pages/CodeConfirm';
import AppLayout from './pages/Layouts/AppLayout';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import AllowNotification from './pages/AllowNotification';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanLayout />} >
          <Route index element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
