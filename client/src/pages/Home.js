import React from "react";
import { useQuery } from "@apollo/client";
// import character list component
import Characters from "../components/CharacterList/homeChar";
import Character from "../components/CharacterList/SearchChar";
import { QUERY_ALL_CHAR, QUERY_CHAR } from "../utils/queries";

const Home = ({ value }) => {
  // // grab queried character list
  const { loading, data } = useQuery(QUERY_ALL_CHAR);
  const { loading: loadL, data: dataD } = useQuery(QUERY_CHAR, {
    variables: { characterId: value }
  });

  // check character
  const characters = data?.getAllCharacters || [];
  const character = dataD?.character || [];
  console.log(character.name);

  return (
    <main>
      <div id="backgroundColor">
        <h2 id="homeTitle">
          Dungeons and Dragons is a popular role playing game that has been around
          since 1974. The game involves role playing as fantastical characters
          with a group of friends and going on imaginary adventures. There are many apects
          to this complicated and lore driven game but the cornerstone of all
          campaigns is the individual characters. Creating your first character
          can be daunting for the first time player. That's why with this site
          we've simplified and streamlined the operation so that you can get to
          playing you first D&D campaign even faster. Good luck!{" "}
        </h2>
      </div>
      <div>
      </div>
      <div>
        {loadL ? (
          <div></div>
        ) : (
          <div>
            <Character character={character} />
          </div>
        )}
        {/* <Character character={character} /> */}
      </div>
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
