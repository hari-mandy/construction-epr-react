import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartyMaster from './pages/Partymaster';
import { useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgetpassword from './pages/Forgetpassword';

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
          <Route path="/forget-password" element={<Forgetpassword />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
