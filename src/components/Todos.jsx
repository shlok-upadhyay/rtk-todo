import { useSelector, useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

import TodoImage from '../assets/images/todo.png';

import { doneTodo, removeTodo, removeAll } from '../features/todo/todoSlice';

const Todos = ({ setInput, setUpdate }) => {
  const todos = useSelector(state => state.todo.todos);
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  return (
    <div className='mx-16 my-6 min-h-[180px] sm:min-h-[240px]'>
      {(todos.length > 0) ? (
        <div>
          <ul className='flex flex-wrap gap-4 justify-center items-center list-none'>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`min-w-[280px] sm:max-w-[1280px] mt-4 flex gap-4 justify-between items-center px-4 py-2 rounded border ${darkTheme ? 'bg-[#222936] border-white text-white' : 'bg-[#ededed] border-black text-black'}`}
              >
                <div className={todo.done ? 'line-through' : ''}>{todo.text}</div>
                <div className='flex flex-wrap justify-end gap-2'>
                  <button
                    onClick={() => {
                      dispatch(doneTodo(todo.id));
                      setInput('');
                      setUpdate(null);
                    }}
                    className={`py-2 px-2 rounded-full ${darkTheme ? 'bg-[#2c333f] hover:bg-[#3f444e]' : 'bg-[#dadfe4] hover:bg-[#c8cdd1]'}`}
                    title={todo.done ? 'Uncheck' : 'Check'}
                  >
                    <FaCheckCircle color={todo.done ? darkTheme ? '#90ff41' : '#3bd800' : '#5f5f5f'} size='1.3rem' />
                  </button>
                  <button
                    onClick={() => {
                      setInput(todo.text);
                      setUpdate(todo.id);
                    }}
                    className={`py-2 px-2 rounded-full ${darkTheme ? 'bg-[#2c333f] hover:bg-[#3f444e]' : 'bg-[#dadfe4] hover:bg-[#c8cdd1]'}`}
                    title='Edit'
                    disabled={todo.done}
                  >
                    <MdEdit color={todo.done ? '#5f5f5f' : darkTheme ? '#ffe515' : '#fd8000'} size='1.3rem' />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeTodo(todo.id));
                      setInput('');
                      setUpdate(null);
                    }}
                    className={`py-2 px-2 rounded-full ${darkTheme ? 'bg-[#2c333f] hover:bg-[#3f444e]' : 'bg-[#dadfe4] hover:bg-[#c8cdd1]'}`}
                    title='Delete'
                  >
                    <FaDeleteLeft color={darkTheme ? '#ff3838' : 'ff1111'} size='1.3rem' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => {
              dispatch(removeAll());
              setInput('');
              setUpdate(null);
            }}
            className={`${darkTheme ? 'bg-[#2c333f] text-[#ff3838] hover:bg-[#3f444e]' : 'bg-[#dadfe4] text-[#ff2121] hover:bg-[#c8cdd1]'} py-3 px-6 rounded font-medium mt-8 block mx-auto`}
          >
            Delete All
          </button>
        </div>
        ) : (
          <img src={TodoImage} alt='Todo List' className='mx-auto mt-12 rounded-2xl w-[300px]' />
        )}
    </div>
  );
};

Todos.propTypes = {
  setInput: PropType.func,
  setUpdate: PropType.func,
}

export default Todos;