import React from 'react';
import { useQuotes } from '../hooks/quotesHook';
import QuoteList from '../components/app/quotes/QuoteList';

const AllQuotes = () => {
  const { loading, quotes } = useQuotes();

  if(loading) return <a>Loading</a>;
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
