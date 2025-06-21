import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  label, link, value, format,
}) => {
  let displayValue;

  if (link) {
    displayValue = (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    );
  } else if (format) {
    displayValue = format(value);
  } else {
    displayValue = value;
  }

  return (
    <tr>
      <td>{label}</td>
      <td>{displayValue}</td>
    </tr>
  );
};

TableRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  format: PropTypes.func,
  link: PropTypes.string,
};

TableRow.defaultProps = {
  value: '',
  format: null,
  link: null,
};

export default TableRow;
