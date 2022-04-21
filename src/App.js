import React from "react";
import "./style.css";
import NavBar from "./NavBar";
import Countries from "./Countries";
import CounriesDetails from "./CountriesDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mui/material";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
export default function App() {
  React.useEffect(() => {
    //console.log(store.getState());
  }, []);
  return (
    <Provider store={store}>
      <div className=" app">
        <NavBar />
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/details/:a">
          <CounriesDetails></CounriesDetails>
        </Route>
      </div>
    </Provider>
  );
}
