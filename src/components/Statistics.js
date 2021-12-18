import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivePercentage,
}) => (
  <ul className={styles.statisticsList}>
    <li className={styles.statisticsItem}>
      <p className={styles.statisticsText}>
        Good:
        <span className={styles.statisticsValue}>{onGood}</span>
      </p>
    </li>
    <li className={styles.statisticsItem}>
      <p className={styles.statisticsText}>
        Neutral:
        <span className={styles.statisticsValue}>{onNeutral}</span>
      </p>
    </li>
    <li className={styles.statisticsItem}>
      <p className={styles.statisticsText}>
        Bad:
        <span className={styles.statisticsValue}>{onBad}</span>
      </p>
    </li>
    <li className={styles.statisticsItem}>
      <p className={styles.statisticsText}>
        Total:
        <span className={styles.statisticsValue}>{onTotal}</span>
      </p>
    </li>
    <li className={styles.statisticsItem}>
      <p className={styles.statisticsText}>
        Positive feedback:
        <span className={styles.statisticsValue}>{onPositivePercentage}</span>%
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
