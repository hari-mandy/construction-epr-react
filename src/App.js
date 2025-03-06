import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartyMaster from './pages/Partymaster';
import { useEffect } from 'react';
import Login from './pages/Login';

function App() {
  useEffect(() => {
    document.title = 'Construction ERP';
  }, []);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/party-master" element={<PartyMaster />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
