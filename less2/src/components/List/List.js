import React from 'react';

const List = ({tasks}) => {

    return (
        <div>
            <h1>Tasks List</h1>
            <ul>
                {tasks.map(task => (
                    <li>
                        <p>{task.id}: {task.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;