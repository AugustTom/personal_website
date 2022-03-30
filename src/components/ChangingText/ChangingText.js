import React, {useEffect, useState} from 'react';

export default ({words}) => {
	const [currentOption, setCurrentOption] = useState(0);
    
	useEffect(()=>{
		const interval = setInterval(()=>{

		}, 1000);
		return () => clearInterval(interval);
	});
	return (
		<>{}</>
	);
};