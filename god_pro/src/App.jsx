import './App.css'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Lookup from './pages/DetailPage/Lookup.jsx';
import Modify from './pages/DetailPage/Modify.jsx';
import Register from './pages/DetailPage/Register.jsx';
import Button2 from './pages/Mypage/Button2.jsx';
import Modify2 from './pages/Mypage/Modify2.jsx';
import Register2 from './pages/Mypage/Register2.jsx';
import Profile from './pages/Mypage/Profile.jsx';
import { Routes, Route } from "react-router-dom";
import SubmitCheck from './pages/SubmitCheck.jsx';
import SubmitPerson from './pages/SubmitPerson.jsx';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detailpage/lookup" element={<Lookup />} />
            <Route path="/detailpage/modify" element={<Modify />} />
            <Route path="/detailpage/register" element={<Register />} />
            <Route path="/mypage/button2" element={<Button2 />} />
            <Route path="/mypage/modify2" element={<Modify2 />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/register2" element={<Register2 />} />
            <Route path="/mypage/submitCheck" element={<SubmitCheck />}/>
            <Route path="/mypage/submit_check/person" element={<SubmitPerson/>}/>
        </Routes>
    </>
  )
}


export default App;
