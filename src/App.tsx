import React, { useState } from 'react'
import InputField from './components/InputField';
import Header from './components/Header';
import TodoList from './components/TodoList';

//Props
import { Todo } from './model';

// css
import './index.css';

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {

      setTodos([...todos, { id: Date.now(), todo, isDone: false}])
      setTodo("");
    }
  }

  const activeTaskCount = todos.length;
  const completedTaskCount = completedTodos.length;
  
  return (
    <div>
      <Header />

      <InputField 
         todo={todo}
         setTodo={setTodo}
         handleAdd={handleAdd}
      />

      <TodoList 
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        activeTaskCount={activeTaskCount}
        completedTaskCount={completedTaskCount}
      />
    </div>
  )
}

export default App