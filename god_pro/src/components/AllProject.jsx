import React from 'react';
import './AllProject.css';
import { useNavigate } from 'react-router-dom';

const AllProject = ({ name, shortDescription }) => {
  const navigate = useNavigate();
  return (
    <div className='allProject_wrapper_allWrapper'>
      <div className='allProject_wrapper'>
        <div className='allProject_wrapper_topWrapper'>
          <div className='employWrapper'>
            <p className='employText'>모집 중</p>
          </div>
          <p className='allProject_wrapper_text'>{name}</p>
          <p className='allProject_wrapper_count'>3 / 8명</p>
          <p className='allProject_wrapper_contents'>{shortDescription}</p>
        </div>
        <div className='allProject_wrapper_bottomWrapper'>
            <button 
            className='allProject_wrapper_btn'
            onClick={()=>navigate('/detailpage/lookup')}
            >자세히보기</button>
        </div>
      </div>
    </div>
  );
};


export default AllProject;