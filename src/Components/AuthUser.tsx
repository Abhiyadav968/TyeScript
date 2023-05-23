import React, { useState } from 'react';
interface IState {
    isLogin: boolean
}

const AuthUser: React.FC = () => {
    const [state, setstate] = useState<IState>({
        isLogin: false
    });
    // Login

    const handleLogin = (): void => {
        setstate({isLogin:true})
        console.log("Hello User")
    }

    const handleLogout = (): void => {
        setstate({ isLogin: false })
    }
    return (
        <div>
            {state.isLogin && state.isLogin ? <><h1>Welcome User</h1></> : <><h1>Please login for DashBord</h1></>}
            {state.isLogin && state.isLogin ?
                (<button type='submit' onClick={handleLogout} className='border py-1.5 px-8 rounded text-lg mt-8 bg-red-500 text-white'>Logout</button>) :
                (<button type='submit' onClick={handleLogin} className='border py-1.5 px-8 rounded text-lg mt-8 bg-blue-500 text-white'>Login</button>)}
        </div>
    )
}

export default AuthUser