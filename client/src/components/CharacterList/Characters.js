import React from 'react';


const Character = ({ characters }) => {
  if (!characters.length) {
    return <h3>No characters yet</h3>;
    
  }
  console.log()
  return (
    <div>
      {characters &&
        characters.map((character) => (
          <div key={character._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <p>{character.name}</p>
              <p>{character.image}</p>
            </h4>
          </div>
        ))}
    </div>
  );
};


export default Character;