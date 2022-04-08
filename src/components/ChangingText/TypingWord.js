import React, {useEffect, useState} from 'react';

export default ({textOptions = ['']}, deletingSpeed = 500, typingSpeed = 500, pause=1000) => {
	const [currentOption, setCurrentOption] = useState(0);
	const [textLength, setTextLength] = useState(0);
	const [currentAction, setCurrentAction] = useState(0); // 0 - typing, 1 - not typing, 2 - deleting

	useEffect(() => {
		if (currentAction === 0) {
			const interval = setInterval(() => {
				setTextLength(textLength => textLength + 1);
			}, typingSpeed);
			return () => clearInterval(interval);
		} else if (currentAction === 2) {
			const interval = setInterval(() => {
				setTextLength(textLength => textLength - 1);
			}, deletingSpeed);

			return () => clearInterval(interval);
		}
	});


	useEffect(() => {
		// when text is finished typing start delay
		if (textLength === textOptions[currentOption].length) {
			setCurrentAction(1);
			setTimeout(() => {
				setCurrentAction(2);
			}, pause);
			//	if text is finished start typing again
		} else if (textLength === 0 && currentAction !== 0) {
			setCurrentAction(0);

			setCurrentOption(currentOption => (currentOption === textOptions.length - 1 ? 0 : currentOption + 1));
		}
	}, [textLength]);


	return (
		<p data-testid="word">{textLength ? textOptions[currentOption].slice(0, textLength) : ''}</p>
	);
};