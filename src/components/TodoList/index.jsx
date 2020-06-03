import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    handleClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    handleClick: null,
};

function TodoList(props) {
    function handleClick(id) {
        props.onTodoClick(id);
    }

    return (
        <ul>
            {
                props.todos.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleClick(todo.id)}
                    >
                        {todo.name}
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoList;