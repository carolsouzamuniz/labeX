import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./components/HomePage";
import ApplicationPage from "./components/ApplicationPage";
import CreateTripPage from "./components/CreateTripPage";
import TripDetailPage from "./components/TripDetailPage";
import TripsListPage from "./components/TripsListPage";
import LoginPage from "./components/LoginPage";
import styled from  'styled-components';
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <CssBaseline/>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppContainer>
          <Switch>
            <Route exact path="/login">
              <LoginPage/>
            </Route>

            <Route exact path="/viagens/detalhe/:tripId">
              <TripDetailPage/>
            </Route>

            <Route exact path="/viagens/criar">
              <CreateTripPage/>
            </Route>

            <Route exact path="/viagens">
              <TripsListPage/>
            </Route>

            <Route exact path="/inscricao">
              <ApplicationPage/>
            </Route>

            <Route exact path="/">
              <HomePage/>
            </Route>
          </Switch>
        </AppContainer>
      </MuiPickersUtilsProvider>
    </Router>
  );
}

export default App;
