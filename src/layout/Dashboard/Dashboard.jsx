import { FaAngleDoubleLeft,    FaHome, FaList, FaMoneyCheck,   FaUsers, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    
    
    return (
        <div className="flex flex-col lg:flex-row bg-slate-600">
        {/* dashboard side bar */}
        <div id="style" className="lg:w-1/4 lg:min-h-screen backdrop-blur-md bg-white/10  text-white shadow-md font-bold ">
            <ul className="menu flex lg:flex-col flex-row gap-6 ">
                

                     <>
                     <li className="text-teal-300">
                     <NavLink to="/">
                     <FaAngleDoubleLeft />
                      Back To Home</NavLink>
                 </li>
            
                 <li>
                     <NavLink to="/dashboard/createtask">
                     <FaUsers></FaUsers>
                      Create Task</NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard/alltask">
                     <FaMoneyCheck />
                     All Task</NavLink>
                 </li>
                 <li>
                     <NavLink to="/dashboard/yourtask">
                     <FaList />
                     Your Task</NavLink>
                 </li>
             
                     </>
                     

                {/* shared nav link */}
                <div className="divider"></div>
                
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 lg:mx-10 lg:py-5 backdrop-blur-md bg-white/10">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;