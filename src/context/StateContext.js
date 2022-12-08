import React, { createContext, useContext, useState } from 'react';
import github from '../api/github';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const handleChangeInput = (event) => {
    setUsername(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const { data } = await github.get('/search/users', {
      params: {
        q: username,
        per_page: 5,
      },
    });
    setResults(data.items);
    github
      .get(`/users/${username}/repos`)
      .then((res) => setRepositories(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <Context.Provider
      value={{
        handleChangeInput,
        username,
        onFormSubmit,
        results,
        repositories,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
