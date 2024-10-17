import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import {IUser} from "../../models/IUser";
import User from "./user/User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.users)
        })
    }, []);
    return (
        <div>
            {
                users.map(user => (<User key={user.id} user={user}/>))
            }
        </div>
    );
};

export default Users;
