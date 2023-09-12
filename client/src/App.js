import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";
import UserPageDetails from "./UserPageDetails"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/users" element={<UserPage />}/>
        <Route path="/users/:id" element={<UserPageDetails />}/>
      </Routes>
    </Router>

  );
}

export default App;
