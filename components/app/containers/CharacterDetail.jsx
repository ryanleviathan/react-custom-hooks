import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from '../characters/CharacterList';
import { findByCharacter } from '../services/avatarApi';
import Header from '../Header';

export default class CharacterDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        character: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  };

  state = {
    loading: true,
    character: []
  };

  async componentDidMount() {
    const { match } = this.props;
    const character = await findByCharacter(match.params.character);
    this.setState({ loading: false, character });
  }

  render() {
    const { loading, character } = this.state;
    const gif = 'https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40';

    if(loading) return <img src={gif} alt="Loading" />;
    return <Header /> && <CharacterList character={character} />;
  }
}
