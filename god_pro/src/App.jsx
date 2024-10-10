import './App.css'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Lookup from './pages/DetailPage/Lookup.jsx';
import Modify from './pages/DetailPage/Modify.jsx';
import Register from './pages/DetailPage/Register.jsx';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Button2 from './pages/Mypage/Button2.jsx';
import Modify2 from './pages/Mypage/Modify2.jsx';
import Register2 from './pages/Mypage/Register2.jsx';
import Profile from './pages/Mypage/Profile.jsx';
import SubmitCheck from './pages/SubmitCheck.jsx';
import SubmitPerson from './pages/SubmitPerson.jsx';
import Auth from './components/Auth.jsx';
import axios from 'axios';

function App() {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [id, setId] = useState(localStorage.getItem('id'));
  const [user, setUser] = useState(null);
  const [project, setProject] = useState([]);
  const endpoint = import.meta.env.VITE_BE_ENDPOINT;
  const baseUrl = `${endpoint}`;

  const addProject = async (newProject) => {
    try {
        const config = {
            // 토큰을 Authorization 헤더에 포함
            headers: {
                'Authorization': `${id}`,
                'Content-Type': 'application/json' // 기본 Content-Type
            }
        };

        // axios POST 요청
        const response = await axios.post(`${baseUrl}/api/projects`, newProject, config);

        // 성공적으로 백엔드에 저장된 경우
        console.log('Project saved successfully:', response.data);

        // 상태 업데이트 및 페이지 이동
        setProject(prevProjects => [...prevProjects, newProject]);
        navigate('/');
    } catch (error) {
        // 에러 처리
        console.error('Error saving project:', error);
        if (error.response) {
            // 서버가 응답을 했지만, 요청이 성공하지 못한 경우
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        } else if (error.request) {
            // 요청이 전송되었지만, 서버로부터 응답이 없는 경우
            console.error('Request made but no response received:', error.request);
        } else {
            // 요청을 설정하는 중에 에러가 발생한 경우
            console.error('Error in setting up request:', error.message);
        }
    }
  };


  return (
    <>
        <Routes>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/detailpage/lookup" element={<Lookup />} />
            <Route path="/detailpage/modify" element={<Modify />} />
            <Route path="/detailpage/register" element={<Register addProject={addProject} />} />
            <Route path="/mypage/button2" element={<Button2 />} />
            <Route path="/mypage/modify2" element={<Modify2 />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/register2" element={<Register2 />} />
            <Route path="/mypage/submitCheck" element={<SubmitCheck />}/>
            <Route path="/mypage/submit_check/person" element={<SubmitPerson/>}/>
            <Route path="/auth" element={<Auth setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>} />
        </Routes>
    </>
  )
}


export default App;
