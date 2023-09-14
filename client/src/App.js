import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage";
import UserPage from "./UserPage";
import UserPageDetails from "./UserPageDetails"
import Inventory from "./Inventory"
import InventoryDetails from "./InventoryDetails"
import Account from "./Account"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/users" element={<UserPage />}/>
        <Route path="/users/:id" element={<UserPageDetails />}/>
        <Route path="/items" element={<Inventory />}/>
        <Route path="/items/:id" element={<InventoryDetails />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </Router>

  );
}

export default App;
