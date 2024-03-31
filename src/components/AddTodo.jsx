import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropType from 'prop-types';

import { addTodo, updateTodo } from '../features/todo/todoSlice';

const AddTodo = ({ input, setInput, update, setUpdate }) => {
  const inputRef = useRef(null);

  const todos = useSelector(state => state.todo.todos);
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  if (update !== null) {
    inputRef.current.focus();
  }

  const TodoHandler = (e) => {
    e.preventDefault();
    if (input !== '' && todos.filter((todo) => todo.text == input).length === 0) {
      if (update !== null) {
        dispatch(updateTodo({id: update, text: input}));
      } else {
        dispatch(addTodo(input));
      }
    }
    setUpdate(null);
    setInput('');
  };

  return (
    <form onSubmit={TodoHandler} className='flex flex-grow-1  sm:flex-row flex-col gap-4 justify-center items-center mt-10'>
      <input
        id='todo'
        type='text'
        className={`min-w-[270px] rounded border focus:ring-1 ${darkTheme ? 'bg-[#232933] border-gray-700 focus:border-[#a9dcfb] focus:ring-[#83cdfa] text-gray-100' : 'bg-[#dadfe4] border-gray-300 focus:border-[#1da1f2] focus:ring-[#1a94da] text-gray-800'} text-base outline-none py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button
        type='submit'
        className={`${darkTheme ? 'text-[#1a202b] bg-[#a9dcfb] hover:bg-[#83cdfa]' : 'text-[#eeeeee] bg-[#1da1f2] hover:bg-[#1a94da]'} font-medium border-0 py-3 px-6 focus:outline-none rounded`}
      >
        {(update) ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  input: PropType.any,  
  setInput: PropType.func,
  update: PropType.any,  
  setUpdate: PropType.func,
}

export default AddTodo;