import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";





const Createtask = () => {
    const {user} = useContext(AuthContext);

    const handleCreateAssign = (e) =>{
        e.preventDefault();

        const form = e.target;
        const 
        post_title = form.title.value;
        const description = form.description.value;
        const type = form.quality.value;
        const deadline = form.Date.value;
        const email = form.email.value;
       

        const newCreator = {
            post_title, 
            description, 
            type,
            deadline,
            email}
        console.log(newCreator)
        //send data to the server

        fetch('http://localhost:5001/alltask',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCreator)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire('Assignment Created ')
            }
        })
    }

    return (
        <div className="bg-[url('https://i.stack.imgur.com/90nGa.jpg')] mb-10">
            <div>
                <h2 className="text-4xl font-bold text-orange-400 text-center underline mb-6">Create Your Task</h2>
            </div>
           <form onSubmit={handleCreateAssign} className="glass">

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border  p-4 ">
         
          <div className=" gap-3">
            <p className="text-xl font-bold underline">Title</p>
             <input type="text" name="title" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
          </div>
          
           <div className=" gap-3">
            <p className="text-xl font-bold underline">Description</p>
             <input type="text" name="description" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
           </div>
           <div className=" gap-3">
            <p className="text-xl font-bold underline">Date</p>
             <input type="date" name="Date" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required />
           </div>
           
          
           <div className=" gap-3">
            <p className="text-xl font-bold underline"> Your email</p>
              <input value={user.email} name="email" type="text" placeholder="Type here" className="input rounded-none input-bordered input-md w-full max-w-xs" required/>
           </div>
           <select name="quality" className="select rounded-none select-bordered w-full max-w-xs">
  <option disabled selected>select quality</option>
  <option>Low</option>
  <option>moderate</option>
  <option>high</option>
</select>
           
           
           </div>
           <div className="flex justify-center">
           <input type="submit" value="Create Assignment" className="btn hover:bg-orange-500 hover:text-white my-3" />
           </div>
           </form>
        </div>
    );
};

export default Createtask;