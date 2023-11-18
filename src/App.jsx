import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import TodoList from './components/TodoList.jsx';
import MeetingNotes from './components/MeetingNotes.jsx';
import ClassicGames from './components/ClassicGames.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/todos" component={TodoList} />
        <Route path="/notes" component={MeetingNotes} />
        <Route path="/games" component={ClassicGames} />
        <Route path="/" component={WelcomePage} />
      </Switch>
    </Router>
  );
}

export default App;
