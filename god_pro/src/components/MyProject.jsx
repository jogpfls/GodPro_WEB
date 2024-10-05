import React from 'react';
import './MyProject.css';
import { useNavigate } from 'react-router-dom';

const MyProject = () => {
  const navigate = useNavigate();
  return (
    <div className='myProject_allWrapper'>
      <p className='myProject_title'>00 프로젝트 모집</p>
      <div className='myProject_buttonWrapper'>
        <button className='myProject_button'>삭제하기</button>
        <button 
        onClick={()=>navigate('/mypage/modify2')}
        className='myProject_button'>수정하기</button>
      </div>
    </div>
  );
};

export default MyProject;