import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_POSTS:
      let temp = [{id: 258469, title: "Redux2", categories: "dsa", content: "dsa"},
        {id: 258451, title: "NewPostRedux", categories: "JS", content: "The main content"}]
      return _.mapKeys(temp, 'id');
      // return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}