import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfirmationPage from "../pages/ConfirmationPage"

export const Router = () => {
    return (<div className = "APP">
    <BrowserRouter>
      <Routes>
        <Route path="/formulariodeviagem"  exact element= {<ApplicationFormPage/>}/>
        <Route path="/criarviagem" exact element = {<CreateTripPage/>} />
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/admin" exact element={<AdminHomePage/>} />
        <Route path="/listadeviagens" exact element = {<ListTripsPage/>} />
        <Route path="/login" exact element = {<LoginPage/>} />
        <Route path="/detalhesdasviagens" exact element = {<TripDetailsPage/>} />
        <Route path="/confirmacao" exact element = {<ConfirmationPage/>} />
      </Routes>
      </BrowserRouter>
      
    </div>)
}