import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiFacebook } from 'react-icons/tfi';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../shared/context/AuthProvider';

const LogIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    // console.log(user)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {

                const user = res.user;


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser)
                //get user token 
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem("token", data.token)
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="hero bg-base-100 my-20">

            <div className="hero-content md:grid gap-5 grid-cols-2">


                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card shadow-2xl p-10">
                    <h1 className='text-3xl font-bold py-5 text-center'>Log In</h1>
                    <form onSubmit={handleLogIn} className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="your password" className="input input-bordered" />
                            <label className="label"> <p>No Account ?
                                <Link to="/register" className="label-text-alt link text-orange-600 font-semibold ml-1"> Register Now</Link></p>
                            </label>
                        </div>
                        <button className='btn bg-orange-600 text-white font-semibold border-none mt-2 hover:scale-105 hover:bg-orange-700'>Log In</button>
                    </form>
                    <h1 className='text-lg font-semibold py-4 text-center'>Or Sing up With</h1>
                    <div className='text-center mb-2'>
                        <button onClick={handleGoogle} className='rounded-full inline-block p-3 bg-slate-200 m-2'> <FcGoogle className='text-center h-6 w-6' />  </button>
                        <button className='rounded-full inline-block p-3 bg-slate-200 m-2'> <FaLinkedinIn className='text-center h-6 w-6' /> </button>
                        <button className='rounded-full inline-block p-3 bg-slate-200 m-2 text-blue-800'> <TfiFacebook className='text-center h-6 w-6' /> </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;