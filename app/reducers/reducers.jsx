import uuid from 'node-uuid';
import moment from 'moment';

// //generic reducer example
// export var genericReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'GENERIC_ACTION':
//       return 'some action';
//     default:
//       return state;
//   };
// };

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
