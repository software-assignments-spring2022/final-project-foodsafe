import Change_allergy_button from './change_allergy_button';
const Header = ({name})=>{
	return (
		<header className='header'>
			<h1>{name}</h1>
			<Change_allergy_button />
		</header>
	);
}
export default Header;