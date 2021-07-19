export const USER_POST_TEXT = 'USER_POST_TEXT'
export const REMOVE_SELECTED_URL = 'REMOVE_SELECTED_URL'

export const fetchPostText = (txt) => dispatch => {
    dispatch({ type: USER_POST_TEXT,value:txt });
}

export const removeSelectedUrl = (txt) => dispatch => {
    dispatch({ type: REMOVE_SELECTED_URL,value:txt });
}