const deleteTo=(id)=>{
    axios.delete(`http://localhost:6500/delete/${id}`)
    .then((e)=>{
        console.log(e.data);
        setTodos((preSate)=> preSate.filter((item)=> item._id !==id))
    })
}