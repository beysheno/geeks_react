import React, {useEffect, useState} from 'react';
import classes from "./User.module.scss";
import User from "../../components/user/User";

//
// export const fetchApi = (API) => {
//     fetch(`${BASE_URL}/${API}`)
//         .then((res) => res.json())
//         .then((data) => setUsers(data))
// }

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [userOne, setUserOne] = useState({});
    const fetchUsers = async (API) => {
        const response = await fetch(`${BASE_URL}/${API}`)
        return await response.json();
    }
    const fetchUserOne = async (API, id) => {
        const response = await fetch(`${BASE_URL}/${API}/${id}`)
        const data = await response.json();
        setUserOne(data)
    }
    useEffect(() => {
        fetchUsers('users').then(data => setUsers(data))
    }, [])
    return (
        <div>
            <div  className={classes.users}>
                {users.map((user) =>
                   <User key={user.id} user={user} fetchUserOne={fetchUserOne} userOne={userOne} />
                )}
            </div>
        </div>
    )
        ;
};

export default UserPage;