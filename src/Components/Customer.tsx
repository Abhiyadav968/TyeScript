import React from 'react'

interface iprops{
    name:string,
    title:string,
    age?:number
}

const Customer: React.FC<iprops>  = ({name,title}) => {

    return (
        <div className='w-[400px] h-[400px] bg-red-600 text-white'>
            <h1 className=''>Welcome to Customer page</h1>
            <h1>{name}</h1>
            <h1>{title}</h1>
        </div>
    )
}

export default Customer