import React from 'react';
import Header from '../components/Header';
import './SubmitCheck.css';
import Submit from '../components/Submit';

const SubmitCheck = () => {
  return (
    <div>
      <Header/>
        <div className='submitCheck_allWrapper'>
          <Submit/>
          <Submit/>
          <Submit/>
          <Submit/>
          <Submit/>
          <Submit/>
        </div>
    </div>
  );
};

export default SubmitCheck;