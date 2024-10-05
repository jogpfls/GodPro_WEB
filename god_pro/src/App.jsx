import './App.css'
import Home from './pages/Home';
import Login from "./pages/Login";
import Lookup from "./pages/DetailPage/Lookup";
import Modify from "./pages/DetailPage/Modify";
import Register from "./pages/DetailPage/Register";
import Button2 from "./pages/MyPage/Button2";
import Modify2 from "./pages/MyPage/Modify2";
import Register2 from "./pages/MyPage/Register2";
import Profile from "./pages/MyPage/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import SubmitCheck from './pages/SubmitCheck';
import SubmitPerson from './pages/SubmitPerson';

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detailpage/lookup" element={<Lookup />} />
            <Route path="/detailpage/modify" element={<Modify />} />
            <Route path="/detailpage/Register" element={<Register />} />
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
