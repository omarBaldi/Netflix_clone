import Movies from './components/movies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Movies />
      </Router>
    </div>
  );
}

export default App;
