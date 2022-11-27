import createAction from '../../utils/reducer/reducer.utils';
import USER_ACTION_TYPES from './user.types';

const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export default setCurrentUser;
