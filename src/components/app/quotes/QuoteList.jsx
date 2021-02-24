import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import Header from '../Header';
import ThemeContext from '../../ThemeContext';

const QuoteList = ({ quotes }) => {
  const { theme } = useContext(ThemeContext);
  const bg =
    theme == 'dark'
      ? 'body {background-color: #404042; color: gray;}'
      : 'body {background-color: #fff; color: #000;}';

  const quoteElements = quotes.map((quote) => (
    <li key={quote.text}>
      <style>{bg}</style>
      <Quote className={theme} {...quote} />
    </li>
  ));
  

  return <Header className={theme} /> 
    && <ul data-testid="quotes">{quoteElements}</ul>;
};

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default QuoteList;
