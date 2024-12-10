import React, { useState } from 'react'
import { Todo } from '../model';

//Buttons
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { MdDownloadDone} from 'react-icons/md';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, setCompletedTodos}) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //Delete
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    setCompletedTodos((prev) => prev.filter((t) => t.id !== id));
  };

  //Done
  const handleDone = (id: number) => {
    if (todo.isDone) {
      setCompletedTodos((prev) => prev.filter((t) => t.id !== id));
      setTodos((prev) => [...prev, {...todo, isDone: false }]);
    } else {
      setTodos((prev) => prev.filter((t) => t.id !== id));
      setCompletedTodos((prev) => [...prev, {...todo, isDone: true}])
    }
  }

  //Edit
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    
      if (todo.isDone) {
        setCompletedTodos((prev) => 
          prev.map((t) => (t.id === id ? {...t, todo: editTodo }: t))
        );
      } else {
        setTodos((prev) => 
          prev.map((t) => (t.id === id ? {...t, todo: editTodo }: t))
        );
    };
    setEdit(false);
  };
  return (

      <form
        onSubmit={(e) => handleEdit(e, todo.id)}
        className='flex items-center justify-center bg-gray-800 text-white
        w-96 rounded-md shadow-md ml-28 m-2'
      >
        {
          edit ? (
            <input 
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className='ml-16 focus:outline-none text-gray-950 rounded-sm py-2 px-4'
            />
          ) : todo.isDone ? (
            <s className='p-6'>{todo.todo} </s>
          ) : (
            <span className='p-6'>{todo.todo} </span>
          )
        }
        <div className='flex gap-6 ml-auto p-5'>

{/* EDIT */}
          {!todo.isDone && (
            <span
            onClick={() => {
              if(!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
            className='cursor-pointer hover:text-blue-500'
            ><CiEdit /></span>
          )}
          
{/* DELETE */}
          <span
            onClick={() => handleDelete(todo.id)}
            className='cursor-pointer hover:text-blue-500'
          ><MdOutlineDelete /></span>

{/* DONE */}
          {!todo.isDone && (
            <span
            onClick={() => handleDone(todo.id)}
            className='cursor-pointer hover:text-blue-500'
          ><MdDownloadDone /></span>
          )}
        </div>
        
      </form>
  )
}

export default SingleTodo