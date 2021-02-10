import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
import { findCharacters } from '../services/avatarApi';
import Header from '../Header';

export default class AllCharacters extends Component {
  state = {
    loading: true,
    characters: []
  }

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({
      loading: false,
      characters
    });
  }

  render() {
    const { loading, characters } = this.state;
    const gif = 'https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40';

    if(loading) return <img src={gif} alt="Loading" />;

    return <Header /> && <CharacterList characters={characters} />;
  }
}
