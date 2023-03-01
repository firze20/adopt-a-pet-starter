import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
        <Route path={"/:type/:id"}>
          <PetDetailsPage />
        </Route>
        {/* type param will be optional so we add ? question mark */}
         <Route path={'/:type?'}>
          <HomePage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
