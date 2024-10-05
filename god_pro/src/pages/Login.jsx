import Header from "../components/Header";
import './Login.css';
import kakaoButton from '../images/kakao_login_medium_wide.png';
import perform from '../images/logoImg.svg';

const Login = () => {
	return (
		<div>
			<Header />
      <div className="login_allWrapper">
				<img className="login_image" src={perform} alt="로고이미지"></img>
				<img className="login_kakaoImage" src={kakaoButton} alt="로그인버튼"></img>
			</div>
		</div>
	);
};

export default Login;