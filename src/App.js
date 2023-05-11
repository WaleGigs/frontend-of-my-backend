import './App.css';
import {  Routes, Route,  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './Dashboard';
import UploadFile from './UploadFile'
import ForgottenPassword from './ForgottenPassword';
function App() {
  const Navigate = useNavigate()
  return (
    <>
      <Routes> 
        <Route path='*' element={<Navigate to="/home" />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/forgot' element={<ForgottenPassword />} />
        <Route path='/upload' element={<UploadFile />} />
      </Routes>
     
     
    </>
  );
}
export default App;