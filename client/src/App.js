import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubmitPage from './components/SubmitPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/submit-page" element={<SubmitPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
