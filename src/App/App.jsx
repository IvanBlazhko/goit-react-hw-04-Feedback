import React, {useState} from 'react';

import Style from './Style/Feedback.module.css';

import FeedbackButtons from "./components/FeedbackButtons";
import FeedbackStatistics from "./components/FeedbackStatistics";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const stateItemIncrement = itemIncrement => {
    if (itemIncrement === "good") return setGood(prevState => prevState + 1)
    if (itemIncrement === "neutral") return setNeutral(prevState => prevState + 1)
    if (itemIncrement === "bad") return setBad(prevState => prevState + 1)
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
       100 / (countTotalFeedback / good)
  );

  return (
    <div className={Style.app__wrapper}>
      <div className={Style.feedback__body}>
        <h1 className={Style.feedback__title}>Please leave feedback</h1>
        <FeedbackButtons
          stateItemIncrement={stateItemIncrement}
          buttons={['good', 'neutral', 'bad']}
        />
        {countTotalFeedback ? (
          <FeedbackStatistics
            good={good}
            bad={bad}
            neutral={neutral}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <div>No Feedback</div>
        )}
      </div>
    </div>
  );
};

export default App;

