import React from 'react';
import './AllProject.css';
import { useNavigate } from 'react-router-dom';

const AllProject = () => {
  const navigate = useNavigate();
  return (
    <div className='allWrapper'>
      <div className='wrapper'>
        <div className='topWrapper'>
          <div className='employWrapper'>
            <p className='employText'>모집 중</p>
          </div>
          <p className='text'>Terraform으로 Azure Clolud 리소스 배포</p>
          <p className='count'>3 / 8명</p>
          <p className='contents'>이건 무슨무슨 프로젝트 (한줄소개)</p>
        </div>
        <div className='bottomWrapper'>
            <button 
            className='btn'
            onClick={()=>navigate('/detailpage/lookup')}
            >자세히보기</button>
        </div>
      </div>
    </div>
  );
};


export default AllProject;