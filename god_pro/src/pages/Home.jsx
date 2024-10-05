import React from 'react';
import styled from 'styled-components';
import AllProject from '../components/AllProject';
import bannerImg from '../images/image.svg'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <>
    <Header isAuthenticated={isAuthenticated}/>
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
          <AllProject />
          <AllProject />
          <AllProject />
        </div>
      </div>
    </div>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  background-color: #FAECE2;
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 950px;
  justify-content: space-between;
`;

const TitleText = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

const BannerImage = styled.img`
  width: 400px;
`;

const Text = styled.p`
  width: 100%;
  text-align: end;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default Home;