import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskclick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => ( 
                <Task 
                    key={task.id}
                    task = { task } 
                    handleTaskClick={handleTaskclick} 
                    handleTaskDeletion={handleTaskDeletion} />
            ))}
        </>
    )
};

export default Tasks;