import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth_reducer from './auth_reducer';
import feature_reducer from './feature_reducer';

const rootReducer = combineReducers({
  auth: auth_reducer,
  feature: feature_reducer,
  form,
});

export default rootReducer;
