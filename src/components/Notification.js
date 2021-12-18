import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Notification = ({ message = "" }) => (
  <div className={styles.notificationItem}>{message}</div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
