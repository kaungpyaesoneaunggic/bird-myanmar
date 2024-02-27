import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BirdPage from "./pages/BirdPage";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
          <div className='content'>
          <Switch >
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path='/birds'>
              <BirdPage/>
            </Route>
          </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
