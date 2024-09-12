import React from 'react';
import {Box} from '../../contents/Box';
import {FeedbackBtn} from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
	return(
		<Box
		display="flex"
		m="10px">
			{options.map(option => (
			<FeedbackBtn 
			key={option} 
			onClick={() => onLeaveFeedback(option)}>
				{option}
			</FeedbackBtn>
			))}
			
		</Box>
	)
}
