import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./jsx/Components/helperComponents/ScrollToTop";
import BrandLandingPage from "./jsx/Pages/BrandLandingPage";
import { Navbar } from "./jsx/Components/SubComponents/Navbar/Navbar";
import { Footer } from "./jsx/Components/SubComponents/Footer/Footer";
import { CreatorLandingPage } from "./jsx/Pages/CreatorLandingPage";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"}>
            <Redirect to="/brand"/>
          </Route>
          <Route exact path={"/brand"}  component={BrandLandingPage} />
          <Route exact path={"/creator"} component={CreatorLandingPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
