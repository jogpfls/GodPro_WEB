import './Button2.css';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

const Button2 = () => {
	const navigate = useNavigate();
  return (
		<div>
			<Header/>
			<div className='button2_allWrapper'>
					<button 
					onClick={()=>navigate('/mypage/profile')}
					className='button2_buttonWrapper'>프로필</button>
					<button 
					onClick={()=>navigate('/mypage/register2')}
					className='button2_buttonWrapper'>등록 프로젝트</button>
			</div>
		</div>
  );
};

export default Button2;