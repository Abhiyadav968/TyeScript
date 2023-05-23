import React, { useState } from 'react';
import { Login } from '../Models/Login';

interface IState {
    users: Login
}

const From: React.FC = () => {
    const [state, setState] = useState<IState>({
        users: {
            userName: '',
            userEmail: '',
            userPassword: '',
        }
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState({
            users: {
                ...state.users,
                [event.target.name]: event.target.value,
            }
        })
    };

    const handleSubmit =()=>{
        // event.preventDefault();
        console.log(state.users)
    }
    return (
        <>
            <div className="flex justify-center">
                <div>
                    <h1 className='text-5xl text-center'>Login From</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="w-[600px] h-[400px] mt-10 pt-14 bg-white shadow-2xl rounded-md">
                            <div className='ml-[20%]'>
                                <label htmlFor="name" className='text-lg'>Name</label><br />
                                <input
                                    type="text"
                                    name="userName"
                                    value={state.users.userName}
                                    onChange={handleChange}
                                    id="name"
                                    className='border-b-2 w-[80%] outline-none' />
                            </div>
                            <div className='ml-[20%] pt-10'>
                                <label htmlFor="Email" className='text-lg'>Email</label><br />
                                <input
                                    type="email"
                                    name="userEmail"
                                    value={state.users.userEmail}
                                    onChange={handleChange}
                                    id="Email"
                                    className='border-b-2 w-[80%] outline-none' />
                            </div>
                            <div className='ml-[20%] pt-10'>
                                <label htmlFor="Password" className='text-lg'>Password</label><br />
                                <input
                                    type="password"
                                    name="userPassword"
                                    value={state.users.userPassword}
                                    onChange={handleChange}
                                    id="Password"
                                    className='border-b-2 w-[80%] outline-none' />
                            </div>
                            <button type='submit' className='border py-1.5 px-8 rounded text-lg mt-8 ml-[40%] bg-blue-500 text-white'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div>
                <p>Input Data</p>
                <p>{JSON.stringify(state.users)}</p>
            </div> */}
        </>
    )
}

export default From