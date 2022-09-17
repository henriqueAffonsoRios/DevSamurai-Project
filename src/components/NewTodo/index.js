import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const NewTodo = ({ onNewTodo }) => {
  const [value, setValue] = useState();

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      submit();
    } else if (event.keyCode === 27) {
      erase();
    }
  };
  const erase = () => {
    setValue('');
  };
  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  return (
    <input
      className="doInput"
      placeholder="What do you need to do?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};

export default NewTodo;
