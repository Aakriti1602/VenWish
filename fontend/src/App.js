import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Navbar} from './Components'
import {Home, MakeWishPage, MoodBoardPage, ShareExperiencePage} from './Pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/makewish' component={MakeWishPage} />
        <Route path='/moodboard' component={MoodBoardPage} />
        <Route path='/share-experience' component={ShareExperiencePage} />
      </Switch>
    </Router>
  );
}

export default App;
