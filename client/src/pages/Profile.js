import React, {useState} from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Characters from '../components/CharacterList/Characters';
import Auth from '../utils/auth';
import { QUERY_USER_CHAR, QUERY_ME } from '../utils/queries';
import { DELETE_CHAR } from '../utils/mutations';

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER_CHAR : QUERY_ME, {
    variables: { username: userParam },
  });

  const [deleteMe, setDeleteMe] = useState({
    characterId: 'ID'
  });
  const [deleteChar, {error}] = useMutation(DELETE_CHAR);

  const handleDelete = async (e) => {
    console.log(e);
    const removeThis = e.target.getAttribute('characters');
    try{
      const { data } = await deleteChar({
        variables: { deleteMe }
      });
    } catch (err) {
      console.error(err);
    }
    // setRemoveChar({
    //   characterId: 'ID',
    // });

  };

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 id="profileHeader">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h1>
        <div className="col-12 mb-5">
          <Characters
            characters={user.characters}
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
