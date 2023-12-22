import { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FaTimes } from "react-icons/fa";
// import { useLoaderData } from "react-router-dom";


const AlltaskCard = ({ allTask,setAllTask}) => {
    // const allTask = useLoaderData()
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
            {statuses.map((status, index) => <Section key={index} status = {status} allTask={allTask} setAllTask={setAllTask} todos={todos} inProgress={inProgress} closed={closed}/>)}
        </div>
    );
};

export default AlltaskCard;

const Section = ({status ,allTask,
    setAllTask,
    todos,
    inProgress,
    closed}) =>{

        const [{ isOver }, drop] = useDrop(() => ({
            accept: "task",
            drop: (item) => addItemToSection(item.id),
            collect: (monitor) => ({
              isOver: !!monitor.isOver()
            })
          }))

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

       const addItemToSection = (id) =>{
         setAllTask(prev =>{
            console.log("prev", prev, id)
            return prev
         })
       } 

    return ( <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
    <Header text={text} bg={bg} count={tasksToMap.length}/> 
    {tasksToMap.length > 0 && tasksToMap.map(task => <Task key={task._id} allTask={allTask} task={task} setAllTask={setAllTask}/>)}
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

const Task = ({ task, allTask, setAllTask }) =>{

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

      console.log(isDragging)


    return ( 
        <div ref={drag} className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"} `}>
            <p>{task.post_title}</p>
            <button className="absolute bottom-1 right-1 text-white" ><FaTimes /></button>
        </div>
    )
};


