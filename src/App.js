import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BirdPage from "./pages/BirdPage";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bgApply">
      <Router>
        <NavBar />
        <div className="content bgApply mt-5 pt-5">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/birds">
              <BirdPage />
            </Route>
            <Route path="/bird/:id">
              <DetailPage />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
