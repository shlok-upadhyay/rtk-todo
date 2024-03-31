import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTodo } from './features/todo/todoSlice';
import { loadTheme } from './features/theme/themeSlice';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [input, setInput] = useState('');
  const [update, setUpdate] = useState(null);

  const todos = useSelector(state => state.todo.todos);
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    const storedDarkTheme = JSON.parse(localStorage.getItem('darkTheme'));
    if (storedTodos) {
      dispatch(loadTodo(storedTodos));
    }
    if (storedDarkTheme) {
      dispatch(loadTheme(storedDarkTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <div className={`${darkTheme ? 'bg-[#1a202b] min-h-screen' : 'bg-[#eeeeee]'} min-h-screen`}>
      <Header />
      <Routes>
        <Route 
          path='/' 
          element={
            <>
              <AddTodo input={input} setInput={setInput} update={update} setUpdate={setUpdate} />
              <Todos setInput={setInput} setUpdate={setUpdate} />
            </>
          } 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
