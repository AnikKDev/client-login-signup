import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import LoadingSpinner from '../../SharedPages/LoadingSpinner';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    // form submission
    const onSubmit = ({ email, password }) => {
        const user = {
            email: email,
            password: password
        };
        fetch('https://secure-wave-45080.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    navigate('/home')
                }
            })
        reset()
    };

    return (
        <div className=" flex justify-center lg:min-h-screen items-center">
            <div className="card w-full md:w-96 items-center shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full lg:w-96">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email" placeholder="email" className="input input-bordered"
                            {...register("email", { required: true })}

                        />
                        <span className="label-text text-error">{errors.email?.type === 'required' && "Email is required"}</span>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input

                            type="password" placeholder="password" className="input input-bordered"
                            {...register("password", { required: true })} />
                        <span className="label-text text-error">{errors.password?.type === 'required' && "Password is required"}</span>


                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>

                </form>

                <label className="my-4">
                    Don't have an account?<Link to="/signup" className="text-neutral underline px-2">Sign Up</Link>
                </label>
            </div>
        </div>
    );
};

export default Login;