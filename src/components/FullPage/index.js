import React from 'react';

export default ({label,children}) => {
	return (
		<div style={{height: 1000 + 'px'}} id={label} data-testid={label}>
			<h1>{label}</h1>
			<>{children}</>
		</div>
	);
};