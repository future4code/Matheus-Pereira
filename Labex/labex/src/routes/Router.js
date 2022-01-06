import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmationPage from "../pages/ConfirmationPage"

export const Router = () => {
    return (<div className = "APP">
    <BrowserRouter>
      <Switch>
        <Route exact path="/formulariodeviagem" > {<ApplicationFormPage/>}</Route>
        <Route exact path="/criarviagem"> {<CreateTripPage/>} </Route>
        <Route exact path="/"> {<HomePage/>}</Route>
        <Route exact path="/admin" > {<AdminHomePage/>} </Route>
        <Route exact path="/listadeviagens" > {<ListTripsPage/>} </Route>
        <Route exact path="/login" > {<LoginPage/>} </Route>
        <Route exact path="/detalhesdasviagens" > {<TripDetailsPage/>} </Route>
        <Route exact path="/confirmacao" > {<ConfirmationPage/>} </Route>
      </Switch>
    </BrowserRouter>
      
    </div>)
}