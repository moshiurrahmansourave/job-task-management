import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const Alltask = ({setTasks}) => {
    const allTask = useLoaderData()
    console.log(allTask)

    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(()=>{

        const fTodos = allTask.filter(task => task.status === 'todo')
        const finProgress = allTask.filter(task => task.status === 'inprogress')
        const fClosed = allTask.filter(task => task.status === 'closed')

        setTodos(fTodos);
        setInProgress(finProgress);
        setClosed(fClosed);

    },[allTask])

    const statuses = ["todo", "inprogress", "closed"]

    return (
        <div className="flex gap-16">
            {statuses.map((status, index) => <Section key={index} status = {status} allTask={allTask} setTasks={setTasks} todos={todos} inProgress={inProgress} closed={closed}/>)}
        </div>
    );
};

export default Alltask;

const Section = ({status ,allTask,
    setTasks,
    todos,
    inProgress,
    closed}) =>{
        let text = "Todo";
        let bg = "bg-slate-500";
        let tasksToMap = todos

        if(status === "inprogress"){
            text = "in Progress"
            bg = "bg-purple-500"
            tasksToMap = inProgress
        }

        if(status === "closed"){
            text = "Closed"
            bg = "bg-green-500"
            tasksToMap = closed
        }

    return ( <div className={`w-64`}>
    <Header text={text} bg={bg} count={tasksToMap.length}/> 
    {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task._id} allTask={allTask} task={task} setTasks={setTasks}/>)}
    </div>
    )
};

const Header = ({ text, bg, count}) =>{
    return ( <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    > 
        {text} 
        <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div>
    </div>
    )
};

const Task = ({ task, allTask, setTasks }) =>{
    return ( 
        <div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
            <p>{task.post_title}</p>
            <button className="absolute bottom-1 right-1 text-white" ><FaTimes /></button>
        </div>
    )
};

































// import { useState } from "react";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";




// const Alltask = () => {

//     const loadAssignments = useLoaderData();
// const [assignments, setAssignments] = useState(loadAssignments)

//     return (
//         <div>
           
//             <div>
//             <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>
//           #
//         </th>
//         <th>name</th>
//         <th> price</th>
//         <th> update</th>
//         <th> delete</th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {
//         assignments.map((item ,index) => <div
        
//         key={item._id} className="card w-96 bg-neutral text-neutral-content">
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">{item.
// post_title}</h2>
//           <p>{item.description}</p>
//           <div className="card-actions justify-end">
//             <button className="btn btn-primary">edit</button>
//             <button className="btn btn-ghost">delate</button>
//           </div>
//         </div>
//       </div>)
//       }
      
//     </tbody>
    
//   </table>
// </div>
//             </div>
//         </div>
//     );
// };

// export default Alltask;