import React, { useEffect, useState } from 'react';
import Datas from './componenets/datas';
import axios from 'axios'
import Update from './componenets/update';
import('./new.css');

const App = () => {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [updateContent, setUpdateContent] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    axios.get("https://backend-8wdo.onrender.com/")
      .then((e) => {
        setTodos(e.data);
      }).catch(err => console.log(err))
  }, [refresh])

  const saveData = () => {
    if (input.trim() === '') {
      alert('Please enter data.');
      return;
    }
    axios.post("https://backend-8wdo.onrender.com//post", { name: input })
      .then((res) => {
        console.log(res.data);
        setRefresh((prevState) => !prevState);
        setInput("");
      })
      .catch(err => console.log(err));
  };


  const deleteItem = (id) => {
    axios.delete(`https://backend-8wdo.onrender.com/${id}`)
      .then(() => {
        console.log("Deleted Successfully");
        setTodos((prevTodos) => prevTodos.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='mainDiv'>
        <div className='input_holder'>
          <input type='text' value={input} placeholder='Enter text' onChange={(e) => setInput(e.target.value)} required />
          <button onClick={saveData} className='btn btn-outline-light'>Add</button>
        </div>

        <div className='lists'>
          {todo.map((data) => <Datas name={data.name} id={data._id} key={data._id} setUpdateContent={setUpdateContent} setShowDropdown={setShowDropdown} deleteItem={deleteItem} />)}
        </div>

      </div>
      {showDropdown && <Update setShowDropdown={setShowDropdown} updateContent={updateContent} setRefresh={setRefresh} />}

    </div>
  )
}

export default App