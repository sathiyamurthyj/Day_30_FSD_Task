import axios from "axios";
import { createContext, useEffect, useState } from "react";

// User Context to provide data to children

export const UserContext = createContext([]);

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [editUser, setEditUser] = useState(null);

    // axios get request to read all users
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response.data);
                setUsers(response.data)
            })
            .catch(error => console.log(error))
    },[]);

    // axios post request to add new user
    const addUser = (data) => {
        axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then(response => {
                setUsers([...users, response.data]);
            })
            .catch(error => console.log(error))
    }

    // axios put request to update existing user
    const updateUser = () => {
        console.log(editUser);
        axios.put(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, editUser)
            .then(response => {
                const updatedUsersList = users.map(user => ( 
                user.id===editUser.id?response.data:user));
                setUsers(updatedUsersList);
                setEditUser(null);
            })
            .catch(error=>console.log(error))
    };

    // axios delete request to delete existing user
    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                const remainingUsersList = users.filter(user => ( 
                user.id !== id));
                setUsers(remainingUsersList);
            })
            .catch(error=>console.log(error))
    };

    const updateEdit = (user) => {
        setEditUser(user);
    }
    
    return (
        <UserContext.Provider value={{users, editUser,setEditUser, updateEdit, addUser, deleteUser, updateUser}}>
            {children}
        </UserContext.Provider>
    );

}