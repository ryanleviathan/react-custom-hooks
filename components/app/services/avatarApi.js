export const findQuotes = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((quotes) =>
      quotes.map(({ name, photoUrl }) => ({
        name,
        photoUrl
      }))
    );
};

export const findQuotesById = (id) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${id}`)
    .then((res) => res.json())
    .then((quotes) =>
      quotes.map(({ name, photoUrl }) => ({
        name,
        photoUrl
      }))
    );
};
