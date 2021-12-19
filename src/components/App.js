import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import styles from './feedback.module.css';

const Feedback = function () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButton = label => {
    switch (label) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = 0;
    if (countTotalFeedback() === 0) {
      return positivePercentage;
    }
    return Math.floor(
      (positivePercentage = (good * 100) / countTotalFeedback()),
    );
  };

  return (
    <div className={styles.thumb}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButton}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            onGood={good}
            onNeutral={neutral}
            onBad={bad}
            onTotal={countTotalFeedback()}
            onPositivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default Feedback;
