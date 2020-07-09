import React, { useState, useEffect } from 'react';
import './App.css';
import ColorBox from './components/BoxColor';
import TodoList from './components/TodoList';
import PostList from './components/TaskName';
import Pagination from './components/Pagination';
import FilterForm from './components/FilterForm';
import queryString from 'query-string';

function App() {
  const [totoList, setTodoList] = useState([
    { id: 1, name: 'Reading books' },
    { id: 2, name: 'Coding React Js' },
    { id: 3, name: 'Going for a walk' }
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 5
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: ''
  });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const filterString = queryString.stringify(filters);
        const url = `http://js-post-api.herokuapp.com/api/posts?${filterString}`;
        const response = await fetch(url);
        const responseJson = await response.json();

        setPostList(responseJson.data);
        setPagination(responseJson.pagination);
      } catch (error) {
        console.log('Failed to get API:', error);
      }
    }

    fetchPosts();
  }, [filters])

  function onPageChange(page) {
    setFilters({
      ...filters,
      _page: page
    });
  }

  function handleTodoClick(todoId) {
    const index = totoList.findIndex(todo => todo.id === todoId);

    const newState = [...totoList];
    newState.splice(index, 1);
    setTodoList(newState);
  }

  function onFilter(formValues) {
    console.log(formValues);
    setFilters({
      ...filters,
      _page: 1,
      title_like: formValues.searchKey
    });
  }

  return (
    <div className="app">
      <h1>React hooks basic</h1>

      {/* <ColorBox />*/}

      {/* <TodoList todos={totoList} onTodoClick={handleTodoClick} /> */}
      <FilterForm onFilter={onFilter} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
