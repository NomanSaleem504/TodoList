import React, { useState } from 'react';
import ToDoList from './TodoList';
import './App.css';


const App = () => {
  const [inputlist, setinputlist] = useState ("");
  const [Items, setItems] = useState([]);
  // const itemEvent = (event) => {
  //   setinputlist(event.target.value);
  // };
const listofItems =() =>{
 setItems((oldItems) =>  {
return [...oldItems, inputlist];
 })
};

return <>
<div className="main_div">
<div className="center_div">
<br />
<h1>To Do List</h1>
<br />
<input type="text" placeholder="Add a items"  onChange={(e)=>setinputlist(e.target.value)}/>
<button onClick={listofItems}> + </button>

<ol>
{/*<li>{inputlist}</li>*/}
{ Items.map ((itemal) => {
return <ToDoList text={itemal}/>;
})}  
</ol>
</div>
</div>
</>;
};



export default App;
