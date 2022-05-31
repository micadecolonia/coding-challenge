import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Trash from './pages/Trash';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Router>
          <div className="App">
            <Header handleToggleDarkMode={setDarkMode} />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/trash" component={Trash} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>

  );
}

export default App;
