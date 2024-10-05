import React from 'react';
import './Submit.css'
import { useNavigate } from 'react-router-dom';

const Submit = () => {
  const navigate = useNavigate();
  return (
    <div 
    onClick={()=>navigate('/mypage/submit_check/person')}
    className='submit_allWrapper'>
      <div className='submit_rightWrapper'>
        <p className='submit_name'>난이름</p>
        <p className='submit_part'>프론트엔드</p>
      </div>
      <div className='submit_profileImage' />
    </div>
  );
};

export default Submit;