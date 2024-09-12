import React from 'react';
import {Box} from '../../contents/Box';
import {Text, TextTotal, TextPercent} from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
	return(
		<Box
		display="flex"
		flexDirection="column"
		alignItems="center"
		border="2px solid black"
		borderRadius="5px"
		width="200px"
		p="20px"
		bg="#a8a8c1">
			<Text>Good: {good}</Text>
			<Text>Neutral: {neutral}</Text>
			<Text>Bad: {bad}</Text>
			<TextTotal>Total: {total}</TextTotal>
			<TextPercent>Positive Feedback: {positivePercentage}%</TextPercent>
		</Box>
	)
}

