import React from 'react';

const Task = (props) => {
    const {task, setList, idx, list, isComplete} = props;

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== idx)
        });
    }

    const onChange = () => {
        list[idx].isComplete = !list[idx].isComplete;
        setList([...list]);
    }
    return (
        <div>
            <h4 style={task.isComplete ? {textDecoration:"line-through"} : {textDecoration:"none"}}>{task.name}</h4>
            <input onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
            <button onClick={onClick}>X</button>
        </div>
    )
}

export default Task;
