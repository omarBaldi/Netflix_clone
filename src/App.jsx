import Movies from './components/movies';
import Styles from './App.module.scss';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MovieSelected from '../src/components/movieInfo/movieInfo';

function App() {
  return (
    <div className={Styles.mainWrapper}>
      <Router>
        <Movies />
        <Route exact path="/movie/:id" component={MovieSelected} />
      </Router>
    </div>
  );
}

export default App;
