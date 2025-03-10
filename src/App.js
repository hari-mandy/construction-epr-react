import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartyMaster from './pages/Partymaster';
import { useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  useEffect(() => {
    document.title = 'Dummie ERP';
  }, []);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/party-master" element={<PartyMaster />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
