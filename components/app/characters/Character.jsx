import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Quote.css';

const Quote = ({ photoUrl, name, _id }) => (
  <figure className={styles.Quote}>
    <Link to={`${_id}`}>
      <img src={photoUrl} alt={name} />
    </Link>
    <figcaption>
      <p>{name}</p>
    </figcaption>
  </figure>
);

Quote.PropTypes = {
  photoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Quote;
