import React, { Fragment,} from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoList from './Screens/To-do/todo-list/TodoList';
import AddTodo from './Screens/To-do/add-todo/AddTodo';



function App() {
  return (

    <Fragment>
      <Routes>
        <Route path="/add" element={<AddTodo/>}/>
        <Route path='/' element={<TodoList/>}/>

      </Routes>

    </Fragment>
  );
}

export default App;











