import React from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <div className="hero bg-base-100 my-20">

            <div className="hero-content md:grid gap-5 grid-cols-2">


                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="card shadow-2xl p-10">
                    <h1 className='text-3xl font-bold py-5 text-center'>Log In</h1>
                    <form className="card-body py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="your password" className="input input-bordered" />
                            <label className="label"> <p>No Account ?
                                <Link href="/" className="label-text-alt link text-orange-600 font-semibold ml-1"> Register Now</Link></p>
                            </label>
                        </div>
                        <div className='btn bg-orange-600 text-white font-semibold border-none mt-2 hover:scale-105 hover:bg-orange-700'>Log In</div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;