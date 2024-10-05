import Header from "../../components/Header";
import './Profile.css';

const Profile = () => {
	return (
		<div>
			<Header/>
			<div className="profile_allWrapper">
				<div className="profile_firstBox">
					<div className="profile_firstLeftBox">
						<p className="profile_name">홍길동</p>
						<p className="profile_team">프론트엔드</p>
					</div>
					<div className="profile_img" />
				</div>
				<div className="profile_secondBox">
					<p className="profile_text">깃허브 -  https:/likelion.com</p>
				</div>
				<div className="profile_thirdBox">
				<p className="profile_text">포트폴리오 -  https:/likelion.com</p>
				</div>
				<p className="profile_titleText">자기소개</p>
				<div className="profile_fourthBox">
				<p className="profile_text">안녕하세요</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;