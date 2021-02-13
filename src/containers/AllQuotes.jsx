import React, { useEffect, useState } from 'react';
import QuoteList from '../components/app/quotes/QuoteList';
import { findQuotes } from '../services/futuramaApi';
import {  }

const AllQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    findQuotes()
      .then((quotes) => {
        setQuotes(quotes);
        setLoading(false);
      });
  }, []);
  const gif = 'https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40';
  if(loading) return <img src={gif} alt="Loading" />;
  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
};

export default AllQuotes;
