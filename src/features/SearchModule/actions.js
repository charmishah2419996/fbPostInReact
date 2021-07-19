import API from "../../Helpers/API";

export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'

export const SELECTED_URL = 'SELECTED_URL'


export const fetchProfile = (id) => dispatch => {
    dispatch({ type: PROFILE_REQUEST })
    return API(`https://api.giphy.com/v1/gifs/search?api_key=BQV3N2HNkpzkR72MCVh1Dw7rxqNW1bWD&q=${id}`)
        .then(json => dispatch({ type: PROFILE_SUCCESS, data: json.data }))
        .catch(err => dispatch({ type: PROFILE_FAILURE }))
}

export const fetchSelectedUrl = (url) => dispatch => {
    dispatch({ type: SELECTED_URL,data:url})
   
}



