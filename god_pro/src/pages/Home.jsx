import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AllProject from '../components/AllProject';
import bannerImg from '../images/image.svg'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Axios } from '../api/Axios';

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchProject = async() => {
      try{
        const response = await Axios.get(`/api/projects`,
          { 
            headers: { Authorization: `3734364008` } 
        }
        );
        setData(response.data.data);
        console.log("내가 성공: ", data);
      }
      catch(error){
        console.error("실패: ", error);
      }
    }
    fetchProject();
  }, [])
  return (
    <>
    <Header />
    <div className='home_wrapper'>
      <div className='home_banner'>
        <div className='home_innerWrapper'>
          <div>
            <p className='home_titleText'>함께하는 프로젝트</p>
            <p className='home_titleText'>함께 성장하는 개발자들의 모임</p>
            <button 
            onClick={()=>navigate('/detailpage/Register')}
            className="home_button">프로젝트 생성하기</button>
          </div>
        <img className='home_bannerImage' src={bannerImg} alt="이미지" />
        </div>
      </div>
      <div>
      <p className='home_text'>기본 정렬 순</p>
        <div className='home_projectWrapper'>
          {data.map((datas)=>
          <>
          <AllProject 
          name={datas.name}
          shortDescription={datas.shortDescription}
          />
          </>
        )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;