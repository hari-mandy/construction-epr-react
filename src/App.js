import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartyMaster from './pages/Partymaster';
// import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/party-master" element={<PartyMaster />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
