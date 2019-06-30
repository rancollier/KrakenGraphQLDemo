import React from "react";
import { Link } from "react-router-dom";

export const AddUserComponent = props => {
    return (
        <Link to={`${props.path}/new`}>Add User</Link>
       
    );
};

export const UserList = props => {
    const { list, path } = props;
   
    const ListItems = list.map((user, index) => {
        return (
            <li key={user.id}>
                <Link to={`${path}/${user.id}`}>
                    {user.firstName} {user.lastName}
                </Link>
            </li>
        );
    });

    return (
        <ul>
            {ListItems}
        </ul>
    );
};


export const UserListLayout = props => {
    return (
        <div>
            <div><AddUserComponent path={props.path}/></div>
            <UserList list={props.list} path={props.path} />
        </div>
    )

}