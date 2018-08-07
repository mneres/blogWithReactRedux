import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      console.log("FETCH_POST");
      console.log("action.payload.data", action.payload.data);
      return { ...state, [action.payload.data.id]: action.payload.data };
      console.log("END_FETCH_POST");
    default:
      return state;
  }
}