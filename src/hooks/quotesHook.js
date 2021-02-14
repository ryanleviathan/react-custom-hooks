import { useState, useEffect } from 'react';
import { findQuotes, findQuotesByCharacter } from '../services/futuramaApi';

export const useQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    findQuotes()
      .then(quotes => {
        setQuotes(quotes);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    quotes
  };
};

export const useQuotesByCharacter = character => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    findQuotesByCharacter(character)
      .then(quotes => {
        setQuotes(quotes);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    quotes
  };
};
