import React from 'react';
import PropTypes from 'prop-types';

import { TbTrash } from 'react-icons/tb';

import './style.css';

function TodoList({ toDos, onToggle, remove }) {
  return (
    <ul className="toDo-list">
      {toDos.map((toDo) => (
        <li
          className={['toDo', toDo.checked ? 'checked' : ''].join(' ')}
          key={toDo.id}
          role="button"
          tabIndex={0}>
          <span onClick={() => onToggle && onToggle(toDo)}>{toDo.title}</span>
          <button className="remove-btn" type="button" onClick={() => remove(toDo)}>
            <TbTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoList;
