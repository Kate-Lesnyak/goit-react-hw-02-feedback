import PropTypes from 'prop-types';

export const FeedbackOptionItem = ({ option, onLeaveFeedback }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </button>
    </li>
  );
};

FeedbackOptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
