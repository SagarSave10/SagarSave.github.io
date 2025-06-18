import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <div className="degree" key={degree.school} style={{ marginBottom: '2em' }}>
        <h3 style={{ fontSize: '0.85em', marginBottom: '0.2em' }}>
          <a href={degree.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {degree.school}
          </a>
        </h3>
        <p style={{ margin: '0.2em 0' }}><strong>{degree.degree}</strong> • {degree.year}</p>
        <p style={{ margin: '0.2em 0' }}><strong>CGPA:</strong> {degree.CGPA}</p>
        <p style={{ margin: '0.2em 0' }}><strong>Course Highlights:</strong> {degree.Course_Highlights}</p>
      </div>
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      CGPA: PropTypes.string,
      Course_Highlights: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number.isRequired,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
