import { combineReducers } from '@reduxjs/toolkit';
import  commonSlice  from '../features/common/slice';

const rootReducer = combineReducers({
    common:commonSlice
})

export default rootReducer;