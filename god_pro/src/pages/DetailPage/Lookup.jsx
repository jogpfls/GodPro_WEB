import Header from '../../components/Header';
import Button from '../../components/Button';
import './Lookup.css'

const Lookup = () => {
	return (
		<div className="entire_wrapper">
			<Header />
			<div className="whole_wrapper">
			<div className="main_wrapper">
				<div className="name_input_wrapper">
					<div>프로젝트 이름</div>
					<div type="text" className="lookup_name_input">공고 만들기 프로젝트</div>
				</div>
				<div className="date_wrapper">
					<div className="month_select_wrapper">
						<div>예상 개발 기간</div>
						<div className='lookup_month'>1개월</div>
					</div>
					<div className="date_input_wrapper">
						<div>모집 마감 날짜</div>
						<div type="date" className="lookup_date_input">2024년 3월 1일</div>
					</div>
				</div>
				<div className="introduce_input_wrapper">
					<div>한줄 소개</div>
					<div type="text" className="lookup_introduce_input">한줄 소개임</div>
				</div>
				<div className="introduce_input_wrapper">
					<div>필요 업무 / 파트</div>
					<div className="part_select_wrapper">
						<div className="lookup_part_select">
              프론트 엔드 - 2명
           	</div>
            <div className="lookup_part_select">
								백엔드 - 3명
        		</div>
        		<div className="lookup_part_select"> 
                디자인 - 1명
        		</div>
						<div className="lookup_part_select">
              기획 - 2명
        		  </div>
					</div>
				</div>
				<div className="datail_input_wrapper">
					<div>프로젝트 설명</div>
					<div type="textarea" className="lookup_datail_input">이 프로젝트는 이러이러한 프로젝트입니다. </div>
				</div>
			</div>
			<p className='lookup_bigTitle'>지원하기</p>
			<div className='lookup_submitWrapper'>
				<div>
					<p className='lookup_apply_title'>지원 파트</p>
					<input className='lookup_applyPart'/>
				</div>
				<div>
					<p className='lookup_apply_title'>지원 동기</p>
					<input className='lookup_Motivation'/>
				</div>
				<div>
					<p className='lookup_apply_title'>컨택 링크</p>
					<input className='lookup_contactLink' />
				</div>
				<Button text="지원하기"/>
			</div>
			</div>
		</div>
	);
};

export default Lookup;
