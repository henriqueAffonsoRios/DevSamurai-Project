/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';

import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [toDos, setToDos] = useState([]);

  const onToggle = (toDo) => {
    setToDos(
      toDos.map((obj) =>
        obj.id === toDo.id
          ? {
              ...obj,
              checked: !toDo.checked
            }
          : obj
      )
    );
  };
  const remove = (toDo) => {
    setToDos(toDos.filter((obj) => obj.id !== toDo.id));
  };

  const onNewTodo = (value) => {
    setToDos([
      ...toDos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      }
    ]);
  };

  return (
    <section className="container">
      <header>
        <h1 className="title">to-Do</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo={onNewTodo} />
        <TodoList toDos={toDos} onToggle={onToggle} remove={remove} />
      </section>
    </section>
  );
};

export default App;
