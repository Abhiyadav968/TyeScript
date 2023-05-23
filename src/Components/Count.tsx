import React, { useState } from 'react'

interface IState{
    count:number
}

const Count: React.FC = () => {
    const [state, setstate] = useState<IState>({count:0})

    const increament = () =>{
        setstate({count: state.count +1})
    }
    const decreament = () =>{
        setstate({count: state.count -1})
    }
    return (
        <div>
            <div className="flex">  
                <div className="flexin1" onClick={decreament}>-</div>
                <div className="flexin2">{state.count}</div>
                <div className="flexin3" onClick={increament}>+</div>
            </div>
        </div>
    )
}

export default Count