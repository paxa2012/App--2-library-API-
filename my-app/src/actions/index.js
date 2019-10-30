let nextID = 1;

export const adduser = (name, lastname, about) => {
   // console.log(payload)
    return {
        type: 'ADD_USER',
        id: nextID++,
        name,
        lastname,
        about
    }
}
export const edituser = (payload) =>{
    console.log(payload)
    return{
        type:'EDIT_USER',
        payload
    }
}
export const activeUser = (user) => {
    //console.log(user);
    return {
        type: 'ACTIVE_USER',
        payload: user
    }
}
