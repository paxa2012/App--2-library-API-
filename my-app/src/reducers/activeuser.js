const activeUser = (state = [], action) => {
    //console.log(action.payload)
    switch (action.type) {
        case 'ACTIVE_USER':
            return action.payload 

        default:
            return state
    }
}
export default activeUser;