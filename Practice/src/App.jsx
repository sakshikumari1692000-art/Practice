import React, { useEffect, useState } from "react";

const App = () => {

  //filtering
  const [search, setSearch] = useState("");
  const users = ["John", "Jane", "Doe", "Smith"];
  const filteredUsers =  users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));

  // todo
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () =>{
    setList([...list, {text : task , done : false}]);
    setTask("");
  }

  const toggleDone = (index) =>{
   const newList = [...list];
   newList[index].done = !newList[index].done;
   setList(newList);
  };

  const deleteTask = (index) =>{
    setList(list.filter((_, i) => i !== index));
  }

  //API Fetch + Loading + Error
  const [data, setData] =  useState([]);
  const [loading, setLoading] =  useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res =>res.json())
      .then(res =>{
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  },[]);

  //pagination 
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const start = (page - 1) * itemsPerPage;
  const currentItems = data.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

// part of fetching data, loading and error handling
  if (loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return (
    <>
      <h1>Filtering</h1>
        <input 
          type="text" 
          placeholder="Search..." 
          value= {search} 
          onChange={(e)=>setSearch(e.target.value)}
        />
      <ul>
        {filteredUsers.map((user,index)=>(
          <li key={index}>{user}</li>
        ))}
      </ul>
      <h1>Todo</h1>
      <input 
      value={task} 
      onChange = {(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      {list.map((item, index) => (
        <div key={index}>
          <span onClick = {()=> toggleDone(index)}
            style={{textDecoration: item.done ? "line-through" : "none"}}
          >
            {item.text}
          </span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
      <h1>API Fetch + Loading + Error</h1>
        <ul>
          {data.map(user =>(
            <li key = {user.id}>{user.title}</li>
          ))}
        </ul>
        <h1>Pagination</h1>
        <ul>
          {currentItems.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <button disabled= {page === 1} onClick ={() => setPage(page - 1)}>Prev</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled = {page === totalPages} onClick={() => setPage(page + 1)}> Next</button>
    </>    
  );
}
export default App;