import { Routes, Route } from 'react-router';

import './App.css'
import { SignUpPage } from './assets/Components/SignUpPage';
import { DownloadPage } from './assets/Components/DownloadPage';
import { LoginPage } from './assets/Components/LoginPage';


function App() {
  return (
    <Routes>
          <Route index element={<LoginPage />}></Route>
          <Route path='download' element={<DownloadPage />}></Route>
          <Route path='signup' element={<SignUpPage />}></Route>
          
          
    </Routes>
  );
}
  

export default App
