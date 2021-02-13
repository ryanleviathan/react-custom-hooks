import React from 'react';
import PropTypes from 'prop-types';
import { useQuotesByCharacter } from '../hooks/quotesHook';
import QuoteList from '../components/app/quotes/QuoteList';

const ByCharacterQuotes = ({ match }) => {
  const { loading, quotes } = useQuotesByCharacter(match.params.character);
  
  if(loading) return <a>Loading</a>;
  return <QuoteList {...quotes} />;
};

ByCharacterQuotes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      character: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ByCharacterQuotes;
