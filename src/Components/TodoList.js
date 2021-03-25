import React, {useState , useEffect} from 'react'
import '../Styles/TodoList.css';
import CreateTask from '../Modals/createTask.js';
import Card from './Card';





function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);




// useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:7001/tasks");
//       res
//         .json()
//         .then(res => setItems(res.task))
//         .catch(err =>(err));
//     }
 
//     fetchData();
//   });




useEffect(()=>{
let arr = localStorage.getItem("taskList")

if(arr){
  let obj=JSON.parse(arr)
  setTaskList(obj)
}

}, [])


  const toggle = () => {
      setModal(!modal);
  }



  const saveTask =(taskObj) =>{
      let tempList = taskList
      tempList.push(taskObj)
      setTaskList(tempList);
      localStorage.setItem("taskList",JSON.stringify(taskList))
      setModal(false);
  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

const updateListArray = (obj, index) => {
  let tempList = taskList
  tempList[index] = obj
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}  


    return (
       
        <>
        <div className="todo__topcontainer text-center">
            <h1 className="todolist__title">Todo List</h1>
           
            <button type="button" class="btn btn-primary mt-3" onClick ={()=>setModal(true)}>Create Task</button>
          
         </div>

           <div className="todo__taskcontainer">
             {/* {taskList.map((obj) => <li>{obj.Name}</li>)}                                                                                                                                                            add */}
             {taskList && taskList.map((obj,index) => <Card taskObj = {obj}  index={index} deleteTask={deleteTask}  updateListArray={ updateListArray}/> )} 
             </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
           
        </>
    )
  }

export default TodoList;