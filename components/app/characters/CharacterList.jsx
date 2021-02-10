import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.name}>
      <Character
        photoUrl={character.photoUrl}
      />
    </li>
  ));

  return <ul data-testid="characters">{characterElements}</ul>;
};

CharacterList.PropTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
