import { all, call } from 'typed-redux-saga/macro';
import { categoriesSaga } from './categories/categories-saga';
import { userSaga } from './user/user.saga';

export default function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)]);
}
