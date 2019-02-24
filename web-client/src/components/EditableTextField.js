import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EditableTextField = ({ text, saveFunction, isSmall }) => {
  const [isEditing, toggleEditing] = useState(false);

  const save = e => {
    if (e.target.value !== text) saveFunction(e.target.value);
    toggleEditing(false);
  };

  const keyDown = e => {
    if (e.key === 'Enter') save(e);
    if (e.key === 'Escape') toggleEditing(false);
  };

  const selfSelect = e => {
    e.target.select();
  };

  const isSmallClass = isSmall ? 'is-small' : '';

  if (isEditing)
    return (
      <input
        className={`input ${isSmallClass}`}
        type="text"
        defaultValue={text}
        onBlur={save}
        onKeyDown={keyDown}
        autoFocus
        onFocus={selfSelect}
      />
    );
  return <span onClick={() => toggleEditing(true)}>{text}</span>;
};

EditableTextField.propTypes = {
  text: PropTypes.string.isRequired,
  saveFunction: PropTypes.func.isRequired,
  isSmall: PropTypes.bool
};
