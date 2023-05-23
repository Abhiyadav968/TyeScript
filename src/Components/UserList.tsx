import React, { useState } from 'react';
import { Iuser } from '../Models/Iuser';
import { Users } from './Users';
import { UserService } from '../Services/UserService';

interface IState {
    users: Iuser[]
}

const UserList: React.FC = () => {
    const [state, setstate] = useState<IState>({
        users: UserService.getAllUsers()
    })
    return (
        <>
            <table className="table-auto borderin">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {state.users.length > 0 && state.users.map(Users => (
                        <tr key={Users.SNO}>
                            <td>{Users.SNO}</td>
                            <td>{Users.Name}</td>
                            <td>{Users.Age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList