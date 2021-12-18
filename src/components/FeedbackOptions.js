import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={styles.feedbackList}>
    {options.map((option) => (
      <li key={option} className={styles.feedbackItem}>
        <button
          className={styles.feedbackButton}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
