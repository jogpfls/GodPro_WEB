import Button from '../../components/Button';
import Header from "../../components/Header";

const Lookup = () => {
	return (
		<div>
			<Header />
            <Button text={'등록하기'} />
			<Button text={'수정하기'} type={'SMALLER'} />
		</div>
	);
};

export default Lookup; 