import PropTypes from 'prop-types';
import { FeedbackOptionItem } from './FeedbackOptionItem/FeedbackOptionItem';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, idx) => (
        <FeedbackOptionItem
          key={idx}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
