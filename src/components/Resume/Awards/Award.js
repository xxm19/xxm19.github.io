import React from 'react';
import PropTypes from 'prop-types';

const Award = ({ data }) => (
  <article className="award-container">
    <header>
      <h4 className="name">{data.title} - {data.year}</h4>
      <p className="describe">{data.note}</p>
    </header>
  </article>
);

Award.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Award;
