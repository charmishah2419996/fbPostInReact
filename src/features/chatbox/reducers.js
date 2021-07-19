import {USER_POST_TEXT} from './actions'

const postData = (state=[], action) => {
 // let data = [];
  switch (action.type) {
      case USER_POST_TEXT:
          console.log("chat text data came",action);
          
          return  [...state , action.value];
      default:
          return state
  }
}

export default postData
