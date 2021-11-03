import './App.css';
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";

function App() {
  return (<div className = "APP">
    <ApplicationFormPage/>
    <CreateTripPage/>
    <HomePage/>
    <AdminHomePage/>
    <ListTripsPage/>
    <LoginPage/>
    <TripDetailsPage/>
    </div>

  );
}

export default App;
