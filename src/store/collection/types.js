import { createThunkRoutine } from 'redux-thunk-routine';

export const getInitialState = createThunkRoutine('COLLECTION/GET_INITIAL_STATE');
export const fetchImage = createThunkRoutine('COLLECTION/FETCH_IMAGE');
export const approveImage = createThunkRoutine('COLLECTION/APPROVE_IMAGE');
export const rejectImage = createThunkRoutine('COLLECTION/REJECT_IMAGE');
