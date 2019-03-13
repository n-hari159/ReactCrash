import React from 'react';

import Newslistitem from "./Newslistitem";

const NewsList = (props)=>{

	const items = props.news.map((item)=>{
		return (
			<Newslistitem item={item} key={item.id}/>
		)
	})
	return (
		<div> 
			{props.children} 
			{items} 
		</div>
	)
}

export default NewsList;