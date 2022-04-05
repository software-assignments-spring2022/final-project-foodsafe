import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes,useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Axios from "axios";


export default function Search_bar() {
	const navigate = useNavigate ();
	let myFood;
	
	const [query, setQuery] = useState("");
	const [foodType, setFoodType] = (["milk", "candy", "cake", "cookie", "cereal"]);
	(async ()=>{
		myFood=await Axios.get('http://localhost:4000/food');
	})();
	
	function handleSearch (event){
		const newQuery = event.target.value;
		setQuery(newQuery);
	}
	/*
		fetch data from backend, if query is present in the data, then redirect to product page
	*/
	const submitSearch= async()=>{
			if((myFood.data.indexOf(query))>=0){
				navigate("/groc_list");
			}else{
				setQuery("not found")
			}
	}
	
	return (
		<form className='serach_form'>
			<div className='input_search'>
	
				<input type='text' placeholder='Enter Product Type' onChange = {handleSearch}/>
				
				
				<button  onClick ={submitSearch} >  
					<SearchIcon/>
				</button>
				
			</div>
			<h1>{query}</h1>
		</form>
	)

	
}

