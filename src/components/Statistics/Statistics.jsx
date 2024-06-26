import React from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ 
    good, 
    neutral, 
    bad, 
    total, 
    positivePercentage 
}) => (
  <div className={css.statistics}>
    <p className={css.label}>Good: {good}</p>
    <p className={css.label}>Neutral: {neutral}</p>
    <p className={css.label}>Bad: {bad}</p>
    <p className={css.label}>Total: {total}</p>
    <p className={css.label}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
