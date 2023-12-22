import { useLoaderData } from "react-router-dom";
import AlltaskCard from "./AlltaskCard";
import { useState } from "react";

const Alltask = () => {
    const allTheTask = useLoaderData()
    const [allTask, setAllTask] = useState(allTheTask)
    console.log(allTask)

    return (
        <div>
            <AlltaskCard allTask={allTask} setAllTask={setAllTask}/>
        </div>
    );
};

export default Alltask;
































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