import { useCallback, useState } from 'react';

export const MovieList = () => {
  const [inputValue, setInputValue] = useState();

  const onFormSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e, e.currentTarget);

  }, [])

  return(
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='movieName' />
        <button type='submit'>Find movies</button>
      </form>
    </div>
  )
};
