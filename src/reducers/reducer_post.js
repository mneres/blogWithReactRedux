import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      // let temp = [{id: 258469, title: "Redux2", categories: "dsa", content: "dsa"},
      //   {id: 258451, title: "NewPostRedux", categories: "JS", content: "The main content"}]
      // return _.mapKeys(temp, 'id');
      console.log("action.payload.data", action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      console.log(action.payload.data);
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}