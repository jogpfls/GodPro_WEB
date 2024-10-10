import Header from '../../components/Header';
import './Register.css';
import Button from '../../components/Button';
import React, { useRef, useImperativeHandle, useState } from 'react';
import axios from 'axios';


const Register = ({ addProject }) => {
	const inputProjectRef = useRef();

	const [values, setValues] = useState({
        name: '',
		shortDescription: '',
		detailDescription: '',
		back: '3',
		front: '4',
		pm: '1',
		design: '2',
		eta: '',
		recruitmentEndDate: '',
    });

	const handleSubmit = () => {
        if (inputProjectRef.current) {
            inputProjectRef.current.handleSubmit();
        }
    };

	const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };


	useImperativeHandle(inputProjectRef, () => ({
        handleSubmit: () => {
            if (!values.name.trim() || !values.shortDescription.trim() || !values.detailDescription.trim()) {
                alert('필수 필드를 모두 채워주세요.');
                return;
            }
            addProject(values);
            setValues({
                name: '',
                shortDescription: '',
                detailDescription: '',
                back: '3',
                front: '4',
				pm: '1',
                design: '2',
                eta: '',
				recruitmentEndDate: '',
            });
        }
    }));

	return (
		<div className="entire_wrapper">
			<Header />
			<div className="whole_wrapper">
			<div className="main_wrapper">
				<div className="page_name">프로젝트 등록하기</div>
				<div className="name_input_wrapper">
					<div>프로젝트 이름</div>
					<input type="text" className="name_input"
					name="name"
					value={values.name}
					onChange={handleChange}/>	
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
						<input 
							type="date" 
							className="date_input"
							name="recruitmentEndDate"
							value={values.recruitmentEndDate}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="introduce_input_wrapper">
					<div>한줄 소개</div>
					<input 
						type="text" 
						className="introduce_input"
						name="shortDescription"
                    	value={values.shortDescription}
						onChange={handleChange}
					/>	
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
					<input 
						type="textarea" 
						placeholder="프로젝트에 대해 설명해주세요" 
						className="datail_input"
						name="detailDescription"
                    	value={values.detailDescription}
						onChange={handleChange}
					/>	
				</div>
				<Button text="등록하기" onClick={handleSubmit}/>
			</div>
			</div>
		</div>
	);
};

export default Register;
