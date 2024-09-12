import React, { useState } from 'react';
import {Box} from '../contents/Box';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics';
import {Message} from './App.styled';

export default function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function addReview(option){
    switch (option) {
      case ('good'):
        setGood(state => state + 1);
        break;
      case ('neutral'):
        setNeutral(state => state + 1);
        break;
      case ('bad'):
        setBad(state => state + 1);
        break;

      default: 
      console.log('Что то пошло не так')
  }
  }

  const totalReview = (good, neutral, bad ) =>{
    return  good + neutral+ bad;
  };

  const total = totalReview(good, neutral, bad);
  const percentPositiveReview = Math.round((good/total)*100);

  return(
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center">
        <h2>Please leave feedback</h2>

        <FeedbackOptions 
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={addReview} 
        > 
        </FeedbackOptions>

        <h2>Statistics</h2>
        {total===0 
        ? <Message>There is no feedback</Message>
        : <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentPositiveReview}></Statistics>
        }
      </Box>
  )


}

