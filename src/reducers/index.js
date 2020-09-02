import { combineReducers } from 'redux';

import productReducers from './buyProductReducer';
import saldoReducers from './saldoReducer';

const rootReducer = combineReducers({
  product: productReducers,
  saldo: saldoReducers,
})

export default rootReducer;