import React from 'react';
import PropTypes from 'prop-types';

const Course = ({ data, last }) => {
  const { title, number, link, university } = data;

  return (
    <li className="course">
      <span className="name">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </span>
      <span className="number">{number}</span>
      <span className="university">{university}</span>
      {!last && <hr />}
    </li>
  );
};

Course.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    number: PropTypes.string,
    link: PropTypes.string, // optional
    university: PropTypes.string,
  }).isRequired,
  last: PropTypes.bool.isRequired,
};

export default Course;
