import React, {useEffect, useState} from 'react';

export default ({textOptions = ['']}, typingSpeed = 200, pause=1000) => {
	const [currentOption, setCurrentOption] = useState(0);
	const [textLength, setTextLength] = useState(0);
	const [currentAction, setCurrentAction] = useState(0); // 0 - typing, 1 - not typing, 2 - deleting

	useEffect(() => {

		const interval = setInterval(() => {
			if (currentAction === 0) {
				setTextLength(textLength => textLength + 1);
				console.log('adding');
			}
			if (currentAction === 2) {
				setTextLength(textLength => textLength - 1);
				console.log('deleting');
			}
		}, typingSpeed);

		return () => clearInterval(interval);
	}, [currentAction]);


	useEffect(() => {
		// when text is finished typing start delay
		if (textLength === textOptions[currentOption].length) {
			setCurrentAction(1);
			console.log('pausing');
			setTimeout(() => {
				setCurrentAction(2);
				console.log('unpausing');
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