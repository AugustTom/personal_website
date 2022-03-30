import React, {useEffect, useState} from 'react';

export default ({textOptions = ['']}) => {
	const [currentOption, setCurrentOption] = useState(0);
	const [textLength,setTextLength] = useState(0);
	const [increasing, setIncreasing] = useState(true);

	useEffect(()=>{
		const interval = setInterval(()=>{
			if(increasing) {
				setTextLength(textLength => textLength + 1);
			}
			else
				setTextLength(textLength => textLength - 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	useEffect(()=>{
		if(textLength === textOptions[currentOption].length){
			setIncreasing(false);
		}else if (textLength === 0 && !increasing){
			setIncreasing(true);

			setCurrentOption(currentOption => (currentOption === textOptions.length - 1 ? 0 : currentOption + 1));
		}
	},[textLength]);


	return (
		<p data-testid="word">{textLength ? textOptions[currentOption].slice(0,textLength): ''}</p>
	);
};