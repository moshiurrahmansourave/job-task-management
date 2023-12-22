import { FaCalendar, FaCalendarAlt, FaCreditCard, FaGlobe, FaHandshake, FaPencilAlt, FaUsers } from "react-icons/fa";
import Banner from "../Banner/Banner";
import './Home.css'


const Home = () => {
    return (
        <div className="home-body">
            <Banner></Banner>

            <div className="bg-slate-100 py-14">
                <h1 className="text-5xl font-semibold text-center">Why Choose <span className="text-yellow-500">Eventchamp?</span></h1>
                <div className="flex items-center justify-center mt-8 mb-3 text-gray-400">
                <h1 className="font-extrabold text-lg">-------------------</h1>
                <FaCalendarAlt className="text-lg mx-4"></FaCalendarAlt>
                <h1 className="font-extrabold text-lg">-------------------</h1>
            </div>
            <p className="text-center text-gray-400 pb-20 mt-9">We simplify planning, boost engagement, and create unforgettable experiences.</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-14 mb-14 px-0 lg:px-28">

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500  hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaCalendar className="text-7xl  text-yellow-500  "></FaCalendar>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">EVENT MANAGEMENT</h1>
                    <p className="text-base text-gray-500">Streamline your event planning with our robust tools. Effortlessly coordinate, track, and optimize events.</p>
                   </div>

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500  hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaPencilAlt className="text-7xl text-yellow-500  "></FaPencilAlt>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">PAYMENT GATEWAYS</h1>
                    <p className="text-base text-gray-500">Secure, seamless transactions with multiple gateways. Simplify ticket sales and donations for your events.</p>
                   </div>

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500 hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaCreditCard className="text-7xl text-yellow-500  "></FaCreditCard>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">SPEAKER MANAGEMENT</h1>
                    <p className="text-base text-gray-500">Attract top speakers and manage their schedules, bios, and content. Enhance your event with expert insights.</p>
                   </div>

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500 hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaUsers className="text-7xl text-yellow-500  "></FaUsers>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">MULTILINGUAL SUPPORT</h1>
                    <p className="text-base text-gray-500">Connect with global audiences through our multilingual platform. Break language barriers for ultimate engagement.</p>
                   </div>

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500 hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaGlobe className="text-7xl text-yellow-500  "></FaGlobe>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">PAGE BUILDER</h1>
                    <p className="text-base text-gray-500">Design stunning event pages with our user-friendly builder. Showcase your event, boost attendance, and impress.</p>
                   </div>

                   <div className=" w-72 text-center mx-auto">
                    <div className="border border-yellow-500 hover:bg-slate-400 duration-300 w-32 p-7 rounded-full mx-auto ">
                    <FaHandshake className="text-7xl text-yellow-500  "></FaHandshake>
                    </div>
                    <h1 className="text-yellow-500 text-lg font-semibold">THEME CUSTOMIZER</h1>
                    <p className="text-base text-gray-500">Attract top speakers and manage their schedules, bios, and content. Enhance your event with expert insights.</p>
                   </div>
                   
            </div>
            </div>
        </div>
    );
};

export default Home;