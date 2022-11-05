import React from 'react';
import img from '../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiFacebook } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../shared/context/AuthProvider';

const Register = () => {
    // const createNewUser = useContext(AuthContext);
    const { createNewUser } = useContext(AuthContext);
    // console.log(createNewUser)
    const formValue = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createNewUser(email, password)
            .then(res => {
                console.log(res.user)
                form.reset()
            })
            .catch(err => console.log(err))

    }


    return (
        <div className="hero bg-base-100 my-20">

            <div className="hero-content md:grid gap-5 grid-cols-2">


                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card shadow-2xl p-10">
                    <h1 className='text-3xl font-bold py-5 text-center'>Sign Up</h1>
                    <form onSubmit={formValue} className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="your password" className="input input-bordered" required />
                        </div>
                        <button className='btn bg-orange-600 text-white font-semibold border-none mt-2 hover:scale-105 hover:bg-orange-700'>Sign Up</button>
                    </form>
                    <h1 className='text-lg font-semibold py-4 text-center'>Or Sing up With</h1>
                    <div className='text-center mb-2'>
                        <button className='rounded-full inline-block p-3 bg-slate-200 m-2'> <FcGoogle className='text-center h-6 w-6' />  </button>
                        <button className='rounded-full inline-block p-3 bg-slate-200 m-2'> <FaLinkedinIn className='text-center h-6 w-6' /> </button>
                        <button className='rounded-full inline-block p-3 bg-slate-200 m-2 text-blue-800'> <TfiFacebook className='text-center h-6 w-6' /> </button>
                    </div>
                    <p className='text-center'>Already Have an accout?<Link to={'/login'} className="text-orange-600 font-semibold link link-hover" > LogIn</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;