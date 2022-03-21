const Search_bar=()=>{
	return (
		<form className='Search-form'>
			<div className='input_search'>
			<label>Search Products</label>
			<input type='text' placeholder='Search products' />
			</div>
			<input type='submit' value='submit' className='submit-search' />
		</form>
	)
	}
export default Search_bar;
