import React from 'react'
import SingleTodo from './SingleTodo'
import { Todo } from '../model'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  activeTaskCount: number;
  completedTaskCount: number;
};

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos,
  setCompletedTodos, activeTaskCount, completedTaskCount }) => {

  return (
    <div className='flex justify-center bg-gray-800'>

      <div className='bg-blue-600 w-full h-aut flex flex-col m-5 p-4 rounded-md'>
        <span className='text-white font-bold mb-2 font-mono'>
          Active Task ({ activeTaskCount })
        </span>

        { todos.map((todo) => (
          <SingleTodo 
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}

      </div>

      <div className='bg-green-600 w-full h-aut flex flex-col m-5 p-4 rounded-md'>
        <span className='text-white font-bold mb-2 font-mono'>
          Completed Task ({ completedTaskCount })
        </span>

        { completedTodos.map((todo) => (
          <SingleTodo 
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setCompletedTodos}
            setCompletedTodos={setTodos}
          />
        ))}

      </div>


    </div>
  )
}

export default TodoList