import React from 'react';
import styled from 'styled-components';
import logo from '../assets/icon.svg';
import Button from '../components/Button';
import { useNavigate } from'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AllWrapper>
      <Wrapper>
        <Logo src={logo} alt="로고이미지" onClick={()=>navigate('/')}/>
        <RightWrapper>
          <MypageText onClick={()=>navigate('/mypage/button2')}>마이페이지</MypageText>
          <Button text={'로그인'} type={'HEADERLOGIN'} onClick={() => navigate('/login')} />
        </RightWrapper>
      </Wrapper>
    </AllWrapper>
  );
};

const AllWrapper = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  width: 950px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 150px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MypageText = styled.p`
  margin-right: 50px;
  font-size: 15px;
  cursor: pointer;

  &:hover{
    font-weight: 600;
  }
`;

export default Header;