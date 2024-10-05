import React from 'react';
import './SubmitPerson.css'
import Header from '../components/Header';

const SubmitPerson = () => {
  return (
		<div>
			<Header/>
			<div className="submitPerson_allWrapper">
				<div className="submitPerson_firstBox">
					<div className="submitPerson_firstLeftBox">
						<p className="submitPerson_name">홍길동</p>
						<p className="submitPerson_team">프론트엔드</p>
					</div>
					<div className="submitPerson_img" />
				</div>
				<div className="submitPerson_secondBox">
					<p className="submitPerson_text">깃허브 -  https:/likelion.com</p>
				</div>
				<div className="submitPerson_thirdBox">
				<p className="submitPerson_text">포트폴리오 -  https:/likelion.com</p>
				</div>
				<p className="submitPerson_titleText">자기소개</p>
				<div className="submitPerson_fourthBox">
				<p className="submitPerson_text">안녕하세요</p>
				</div>
			</div>
		</div>
	);
};

export default SubmitPerson;