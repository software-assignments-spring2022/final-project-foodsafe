import React, {useEffect, useState} from "react";
import axios from "axios"
import {BrowserRouter as Router, Routes,useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';


export default function Search_bar() {
	const navigate = useNavigate ();

	const [query, setQuery] = useState("");
	const [foodType, setFoodType] = useState(["milk", "candy", "cake", "cookie", "cereal"]);

	// useEffect(() => {
	// 	const fetchFoodType = async () => {
	// 		const res = await axios.get('http://localhost:3500/foodtype');
	// 		setFoodType(res.data);
	// 	};
	// 	fetchFoodType();
	// })

	function handleSearch (event){
		const newQuery = event.target.value;
		setQuery(newQuery);
	}
	/*
		fetch data from backend, if query is present in the data, then redirect to product page
	*/
	function submitSearch (event){
		
		axios.get('http://localhost:3500/foodtype')
			.then( (response) => {
				navigate ("/groc_list")//if query is in response(result) then navigate torecommended page
				// console.log(query);
				// console.log(response.data);
				// setFoodType(response.data);
				
				// console.log(foodType);

				// if(foodType.includes(query)){
				// 	console.log("hit");
				// }
				
			})
			.catch((error) =>{
				console.log(error);
			})
		
			
	}

	
	//() => navigate ("/groc_list")
	
	return (
		<form className='serach_form'>
			<div className='input_search'>
	
				<input type='text' placeholder='Enter Product Type' onChange = {handleSearch}/>
				
				
				<button className = "searchIcon" onClick ={submitSearch }>  
					<SearchIcon/>
				</button>
				
			</div>
			<h1>{query}</h1>
		</form>
	)

	
}
