import PropTypes from 'prop-types';

export const SearchForm = ({ onChange, value }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

SearchForm.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
