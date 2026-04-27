import React from 'react';
const itemArray = [item1, item2, item3];
 
// Now, jsxElements is an array like:
// [<MyComponent data={item1} />, <MyComponent data={item2} />, <MyComponent data={item3} />]

const TaskList = itemArray.map((itemData) => {
    return <MyComponent data={itemData} />;
    return <ul>{Tasklist.itemAray}</ul>;
    return <div>TaskList component</div>;
});

interface Task {
  id: string; // Unique ID from data
  name: string;
  price: number;
}
 
const tasks: Task[] = [
  { id: 't1', name: 'Wash Dishes'},
  { id: 't2', name: 'Mow grass'},
  { id: 't3', name: 'Take out trash'},
];
 
function TaskList() {
  const taskElements = products.map((task) => (
    // Key goes on the outermost element in the map - the <li> here
    <li key={task.id} style={{ borderBottom: '1px solid #eee', marginBottom: '10px', paddingBottom: '10px' }}>
        {/* Using the dedicated component */}
        <TaskItem task={task} />
 
        {/* Or render directly
        {/* <h3>{task.name}</h3>
        <p>ID: {task.id}</p>
        } */}
    </li>
  ));
 
  return (
    <div>
      <h2>Tasks</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {taskElements}
      </ul>
    </div>
  );
}
 

export default TaskList;
