import './App.css';
import react, { useState } from 'react';
import Input from './Components/Input';
import Task from './Components/Task';

function App() {
  const [list, setList] = useState([]);

  let task ={
    name: "",
    isComplete: false
  };

  const onChange = (e) => {
    task.name = e.target.value;
  };

  const onClick = (e) => {
    setList([...list,task])
    e.target.value = ""
  }

  return (
    <div className="App">
      {list.map((task,i) =>(
        <Task task={task} setList={setList} idx={i} list={list}/>
      ))}
      <Input onChange={onChange} onClick={onClick} list={list} setList={setList}/>
      
      
    </div>
  );
}

export default App;
