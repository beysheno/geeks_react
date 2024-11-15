import React from 'react';
import classes from "./User.module.scss";

const User = ({user,fetchUserOne,userOne}) => {
    return (
            <div key={user.id} className={classes.user}>
                <div>Name: {user.name}</div>
                <div>UserName: {user.username}</div>
                <button onClick={()=>fetchUserOne('users', user.id)}>Подробнее</button>
                <br/>
                {
                    userOne.id === user.id && <>
                        <div>company name: {userOne?.company?.name}</div>
                        <div>company city: {userOne?.adress?.city}</div>
                    </>
                }

            </div>
    );
};

export default User;