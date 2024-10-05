import React from 'react';
import Header from "../components/Header";
import './Login.css';
import kakaoButton from '../images/kakao_login_medium_wide.png';
import perform from '../images/logoImg.svg';
import { getKakaoLoginUrl } from '../api'; // 카카오 로그인 URL 가져오는 함수


const Login = () => {
	const handleLogin = async () => {
        try {
            const loginUrl = await getKakaoLoginUrl();
            window.location.href = loginUrl; // 카카오 로그인 페이지로 이동
        } catch (error) {
            console.error('Error fetching Kakao login URL:', error);
        }
    };

	return (
		<div>
			<Header />
      <div className="login_allWrapper">
				<img className="login_image" src={perform} alt="로고이미지"></img>
				<img className="login_kakaoImage" src={kakaoButton} alt="로그인버튼" onClick={handleLogin}></img>
			</div>
		</div>
	);
};

export default Login;