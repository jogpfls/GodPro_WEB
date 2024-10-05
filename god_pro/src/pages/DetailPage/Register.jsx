import Header from '../../components/Header';
import './Register.css';
import Button from '../../components/Button';

const Register = () => {
	return (
		<div className="entire_wrapper">
			<Header />
			<div className="whole_wrapper">
			<div className="main_wrapper">
				<div className="page_name">프로젝트 등록하기</div>
				<div className="name_input_wrapper">
					<div>프로젝트 이름</div>
					<input type="text" className="name_input"/>	
				</div>
				<div className="date_wrapper">
					<div className="month_select_wrapper">
						<div>예상 개발 기간</div>
						<select name="" id="" className="month_select">
							<option value="">1개월</option>
							<option value="">2개월</option>
							<option value="">3개월</option>
							<option value="">4개월</option>
							<option value="">5개월</option>
							<option value="">6개월</option>
							<option value="">7개월</option>
						</select>
					</div>
					<div className="date_input_wrapper">
						<div>모집 마감 날짜 선택하기</div>
						<input type="date" className="date_input" />
					</div>
				</div>
				<div className="introduce_input_wrapper">
					<div>한줄 소개</div>
					<input type="text" className="introduce_input" />	
				</div>
				<div className="introduce_input_wrapper">
					<div>필요 업무 / 파트</div>
					<div className="part_select_wrapper">
					 	<div className="part_select">
               		 		<label htmlFor="frontend"><input type="checkbox" name="frontend" id="frontend" value="meat" /> 프론트엔드</label>
           				</div>
            			<div className="part_select">
        				 	<label htmlFor="backend"><input type="checkbox" name="backend" id="backend" value="backend" /> 백엔드</label>
        				</div>
        				<div className="part_select"> 
                 			<label htmlFor="design"><input type="checkbox" name="design" id="design" value="design" /> 디자인</label>
        				</div>
						<div className="part_select">
                 			<label htmlFor="pm"><input type="checkbox" name="pm" id="pm" value="pm" /> 기획</label>
        				</div>
					</div>
				</div>
				<div className="datail_input_wrapper">
					<div>프로젝트 설명</div>
					<input type="textarea" placeholder="프로젝트에 대해 설명해주세요" className="datail_input"/>	
				</div>
				<Button text="등록하기"/>
			</div>
			</div>
		</div>
	);
};

export default Register;
