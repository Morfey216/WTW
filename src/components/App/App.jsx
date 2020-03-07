import React from 'react';
import Main from '../Main';
import {filmsList} from '../../mocks/films';
import {GENRES} from '../../mocks/genres';

const App = () => {
  return (
    <Main
      filmsList = {filmsList}
      genres = {GENRES}
    />
  );
};

export default App;
