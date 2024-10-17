import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {getUsers} from "../../services/api.services";

const Users: FC = () => {

    const [users , setUsers] = useState<IUser[]>([])

    useEffect(  () => {
        // fetch('https://dummyjson.com/users')
        //     .then(res  => res.json())
        //     .then(res => {
        //         // setUsers(res<IDummyJson>)
        //         let k = res<IDummyJson>
        //     });

        getUsers().then(value => {
            setUsers(value)
            console.log(value)
        })
    }, []);


    return (
        <div>
            {
                users.map(user => <div>{user.firstName}</div>)
            }
        </div>
    );
};

export default Users;
