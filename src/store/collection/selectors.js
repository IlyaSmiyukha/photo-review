import {
  createSelector,
} from 'reselect';

export const getCollectionState = createSelector([state => state], state => state.collection);
export const getApprovedImages = createSelector([getCollectionState], collection => collection.approved);
export const getRejectedImages = createSelector([getCollectionState], collection => collection.rejected);
export const getCurrentImage = createSelector([getCollectionState], collection => collection.current);
