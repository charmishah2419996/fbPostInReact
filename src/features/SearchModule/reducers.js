
import { PROFILE_SUCCESS,SELECTED_URL, } from './actions'
import { REMOVE_SELECTED_URL } from '../chatbox/actions'


const gifData = (state = { profile: [], url: "" }, action) => {

    switch (action.type) {
        case PROFILE_SUCCESS:
            console.log("data came ") 
            return { ...state, profile: action.data }; 

        case SELECTED_URL:
            console.log("data came for SELECTED_URL" ,action.data)
            return { ...state, url: action.data }; 

        case REMOVE_SELECTED_URL:
                console.log("data came for SELECTED_URL" ,action.data)
                return { ...state, url: "" }; 
                
        default:
            return state
    }
}

export default gifData
