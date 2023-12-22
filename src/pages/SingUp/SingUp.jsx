import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const SingUp = () => {
    const {createUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        setRegisterError('')
        setSuccess('')
        if (password.length < 6) {
            setRegisterError('password should be 6 carecter or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password should have at least one upuer case caracters.')
            Swal.fire('your password should have at least one upuer case caracters.')
            return;
        }

        createUser (email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
            Swal.fire('Already exists')
        })
    }

    return (
        <div className="mt-48">
              <div className="lg:mb-96 mb-5 ">
           <div className=" card p-4 w-96 glass mx-auto relative mt-8">
           <div className="">
           <div className="flex items-center justify-between">
               <h2 className="card-title">Register</h2>
         </div>
               
   <form onSubmit={handleRegister} className="">
       <div className="form-control">
           <label className="label">
               <span className="label-text">Name</span>
           </label>
           <input name="name" type="Text" placeholder="name" className="input input-bordered" required />
       </div>
       <div className="form-control">
           <label className="label">
               <span className="label-text">Email</span>
           </label>
           <input name="email" type="email" placeholder="email" className="input input-bordered" required />
       </div>
       <div className="form-control">
           <label className="label">
               <span className="label-text">Password</span>
           </label>
           <input name="password" type="password" placeholder="password" className="input input-bordered" required />
           <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
           {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                success && <p className="text-green-700">
                    {success}
                </p>
            }
          
       </div>
       <div className="form-control mt-6">
           <button className="btn font-medium text-lg hover:bg-yellow-500 hover:text-white ">Register</button>
       </div>
       <div className="text-center mt-3">
        <p>If you have account </p>
           <p><Link className=" hover:underline font-bold text-xl" to="/login">
           Return to login
           </Link>
           </p>
       </div>
  </form>
           </div>
       </div>
       </div>
        </div>
    );
};

export default SingUp;