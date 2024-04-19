import { Routes, Route ,Navigate} from "react-router-dom"
import Home from './pages/Home';
import Layout from './Layouts';
import DashBoard from './pages/DashBoard';
import CreateEvent from './pages/CreateEvent';
import TotalEvents from "./pages/TotalEvents";
import RegisterationList from "./pages/RegistrationList";
import EditEvent from "./pages/EditEvent";
import DisplayEvent from "./pages/DisplayEvent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="create-event" element={<CreateEvent />} />
        <Route path="total-events" element={<TotalEvents />} />
        <Route path="registration-list" element={<RegisterationList />} />
        <Route path="edit-event" element={<EditEvent />} />
        <Route path="display-event" element={<DisplayEvent />} />
        <Route path="*"  element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
