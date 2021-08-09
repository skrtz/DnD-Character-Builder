import React from 'react';
// import { useQuery } from '@apollo/client';

// import Nav from '../components/nav';

// import { QUERY_CHAR } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_CHAR);
//   const thoughts = data?.char || [];

  return (
    <main>
        {/* <Nav /> */}
      <div className="flex-row justify-center">
        <h1>User: </h1>
        <ul>
            <li></li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
