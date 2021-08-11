import React from 'react';
import { useQuery } from '@apollo/client';
// import character list component
import Characters from '../components/CharacterList/Characters';
import { QUERY_ALL_CHAR } from '../utils/queries';


const Home = () => {
  // // grab queried character list
  const { loading, data } = useQuery(QUERY_ALL_CHAR);
  // check character
  const characters = data?.getAllCharacters || [];

  return (
    <main>
      <div>
        {loading ? (
            <div>Loading...</div>
          ) : (
        <Characters characters={characters} />
          )}
      </div>
    </main>
  );
};

export default Home;
