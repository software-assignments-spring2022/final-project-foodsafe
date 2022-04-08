import Change_allergy_button from './change_allergy_button';
import { useNavigate } from 'react-router-dom';

const Header = ({name})=>{
	return (
		<header className='header'>
			<h1>{name}</h1>
			
		</header>
	);
}
export default Header;
