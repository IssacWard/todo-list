import React from 'react';

const Input = (props) => {
    const {list,setList, onChange, onClick} = props;

    return (
        <div>
            <input onChange={onChange} type="text" name="task" />
            <button onClick={onClick}>Add</button>
        </div>
    )
}

export default Input;
