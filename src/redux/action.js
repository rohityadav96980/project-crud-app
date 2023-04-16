import * as types from "./actionType"
import axios from "axios"

export const getUsers =(users)=>({
    type:types.GET_USERS,
    payload : users,
});

export const userDeleted = () =>({
    type:types.DELETE_USERS,
});

export const userAdded = () =>({
    type:types.ADD_USERS,
});

export const userUpdated = () =>({
    type:types.UPDATE_USER,
});

// for singleUser
export const getUser = (user)=>({
    type:types.GET_SINGLE_USER,
    payload : user,
})

export const loadUsers = () =>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((resp)=>{
            console.log('res',resp);
            dispatch(getUsers(resp.data));
        })
        .catch((error)=>console.log(error))
    };
};

export const deleteUser = (id) =>{
    return function(dispatch){
        axios
        .delete(`${process.env.REACT_APP_API}${id}`)
        .then((resp)=>{
            console.log('res',resp);
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=>console.log(error))
    };
};

export const addUser = (id) =>{
    return function(dispatch){
        axios
        .delete(`${process.env.REACT_APP_API},user`)
        .then((resp)=>{
            console.log('res',resp);
            dispatch(userAdded());
            dispatch(loadUsers());
        })
        .catch((error)=>console.log(error))
    };
};

export const getSingleUser = (id) =>{
    return function(dispatch){
        axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log('res',resp);
            dispatch(getUser(resp.data));
            
        })
        .catch((error)=>console.log(error))
    };
};

export const updateUser = (user, id) =>{
    return function(dispatch){
        axios
        .put(`${process.env.REACT_APP_API}${id}`, user)
        .then((resp)=>{
            console.log('res',resp);
            dispatch(userUpdated());
            
        })
        .catch((error)=>console.log(error))
    };
};