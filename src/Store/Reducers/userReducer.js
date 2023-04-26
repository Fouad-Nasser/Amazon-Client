import { SET_USER, USER_LOGOUT} from "../Constants/userConstans";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, userInfo: action.payload}    

        case USER_LOGOUT:
            return null
        default:
            return state;
    }
}