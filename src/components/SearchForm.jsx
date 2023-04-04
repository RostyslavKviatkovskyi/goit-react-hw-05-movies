import PropTypes from 'prop-types';

export const SearchForm = ({ onChange, value, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.query.value.trim();

    if (searchQuery === '') {
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        // value={value}
        // onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Find movie</button>
    </form>
  );
};

SearchForm.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
