export const SearchForm = ({ onChange, value, onSubmit }) => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const searchQuery = e.currentTarget.query.value.trim();

  //   if (searchQuery === '') {
  //     return;
  //   }

  //   onSubmit(searchQuery);
  //   e.currentTarget.reset();
  // };

  return (
    <form>
      {/* <form onSubmit={handleSubmit}></form> */}
      <input
        type="text"
        name="query"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Find movies</button>
    </form>
  );
};

// { onSubmit, value, updateQueryString }
