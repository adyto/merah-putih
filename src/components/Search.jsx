import React from 'react';
import { useStateContext } from '../context/StateContext';

const Search = () => {
  const { username, handleChangeInput, onFormSubmit } = useStateContext();

  return (
    <div className="w-full h-full bg-white mt-6">
      <div className="container mx-auto">
        <form onSubmit={onFormSubmit}>
          <div className="flex flex-col max-w-2xl mx-auto px-6 gap-4">
            <input
              type={'text'}
              placeholder="Enter username"
              onChange={handleChangeInput}
              value={username}
              className="bg-gray-200 py-2 px-4 capitalize"
            />
            <button
              type={'submit'}
              className="border py-2 px-6 bg-sky-500 text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
