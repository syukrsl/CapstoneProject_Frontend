import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Updated to Routes for v6
import WelcomePage from './pages/WelcomePage.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import TodoList from './components/TodoList.jsx';
import MeetingNotes from './components/MeetingNotes.jsx';
import ClassicGames from './components/ClassicGames.jsx';
import News from './pages/News.jsx';
import AuthenticatedHome from './pages/AuthenticatedHome.jsx';
function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/news" element={<News />} />
      <Route path="/authenticated" element={<AuthenticatedHome />}></Route>
      <Route path="/todos" element={<TodoList />} />
      <Route path="/notes" element={<MeetingNotes />} />
      <Route path="/games" element={<ClassicGames />} />
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
