import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MyProject from "../../components/MyProject";
import './Register2.css'

const Register2 = () => {
	return (
		<div>
			<Header />
			<div className="register_allWrapper">
				<MyProject/>
				<MyProject/>
				<MyProject/>
				<MyProject/>
				<MyProject/>
			</div>
		</div>
	);
};

export default Register2;