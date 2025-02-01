import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import styles from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={styles['app-container']}>
      <h1>Please leave feedback 😊</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleLeaveFeedback}
      />
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="There is no feedback yet..." />
      )}
    </div>
  );
};

export default App;
