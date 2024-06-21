
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { HomePage, Login, RegistartionPage } from './Routes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegistartionPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
