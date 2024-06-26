import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submitHandler = async (data) => {
        try {
            const res = await axios.post("http://localhost:4000/user/login", data);
            //console.log('reees',res);
            if (res.status === 200) {
                alert('login successful');
                sessionStorage.setItem("id", res.data.data._id);
                navigate('/user/dashboard');
            }
        }
        catch (err) {
            console.log('login error :', err);
        }
        //console.log("form data:", data);
    }

    return (
        <div className='page-header align-items-left min-vh-100' >
            <span className="mask bg-gradient-dark opacity-6" />
            <div className='row'>
                <div className='col-lg-4 col-md-8 col-12 mx-auto'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='card-title'>Login</h4>
                        </div>
                        <div className='card-body' >
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor='email'>E-mail:</label>
                                            <input type='text' {...register('email')} className='form-control'></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor='password'>Password:</label>
                                            <input type='password' {...register('password')} className='form-control'></input>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-info btn-fill">
                                    Login
                                </button>  Not registered? Sign-up here <Link to='/signup'>SIGN UP</Link>
                                <div>
                                <Link to='/resetpassword'> Forgot Password ? </Link>
                                </div>
                                <div className="clearfix" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//<div>
        //     <form onSubmit={handleSubmit(submitHandler)}>
        //         <div>
        //             <label htmlFor='email'>E-mail:</label>
        //             <input type='text' {...register('email')}></input>
        //         </div>
        //         <div>
        //             <label htmlFor='password'>Password:</label>
        //             <input type='password' {...register('password')}></input>
        //         </div>
        //         <div>
        //             <input type='submit' value='LOGIN'></input> OR <Link to='/signup'>SIGN UP</Link>
        //         </div>
        //     </form>>
        //     </div>