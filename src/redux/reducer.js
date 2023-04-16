import * as types from "./actionType"

const initialState = {
    users : [],
    user : {},
    loading : false
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
         case types.GET_USERS:
            return{
                ...state,
                users: action.payload,
                loading:false,
            };

        case types.DELETE_USERS:
            return{
                ...state,
                loading:false,
            };
        case types.GET_SINGLE_USER :
            return{
                ...state,
                user:action.payload,
                loading:false,
            }
        default:
            return state;
            
    }
};

export default reducer;