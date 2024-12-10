import React from 'react'

type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd}) => {
  
  return (
    <div className='py-4 px-6 pt-5 flex justify-center'>
      <form className='relative'
      onSubmit={(e) => handleAdd(e)}>
        <div className='relative mt-20'>
          <input 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type='input'
          id='taskInput'
          placeholder=''
          className='py-4 px-8 rounded-sm border border-gray-300 shadow-md focus:outline-none focus:outline-ring-2 focus:ring-blue-500
          peer'
          />
          
          <label
          htmlFor='taskInput'
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-200
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
          peer-focus:top-0 peer-focus:text-xs peer-focus:pb-1 peer-focus:bg-white font-poppins p-1
          peer-focus:text-blue-500 cursor-text'
          >
            Enter a Task</label>
         
        </div>
        <button 
          type='submit'
          className='absolute top-1/2 right-2 mt-10 transform -translate-y-1/2 py-2 px-4 bg-blue-600 text-white rounded-sm hover:bg-blue-700 text-sm'
          >
          Submit</button>
      </form>
    </div>
  )
}

export default InputField