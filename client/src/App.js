import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/parts/Header";
import Footer from "./components/parts/Footer";
import Home from "./components/pages/Home";
import Stats from "./components/pages/Stats";
import Roster from "./components/pages/Roster";
import Profile from "./components/pages/Profile";
import Schedule from "./components/pages/Schedule";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route exact path="/" component={Home} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/roster" component={Roster} />
        <Route exact path="/schedule" component={Schedule}/>
        <Route exact path="/profile/:id" component={Profile} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
