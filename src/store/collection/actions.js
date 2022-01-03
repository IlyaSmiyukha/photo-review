import { store } from '../store'
import { getRejectedImages } from './selectors';
import * as types from './types';

export const getImage = () => {
  return {
    routine: types.fetchImage,
    promise: client => new Promise(async (resolve, reject) => {
      try {
        //get list of already rejected images
        const rejectedList = getRejectedImages(store.getState());

        //fetch new image
        const newImage = await client.get('/photos/random', {
          orientation: 'landscape'
        });

        //check if image already rejected call getImage action
        const isImageRegected = rejectedList.includes(newImage.id);
        if (isImageRegected) {
          reject();
          store.dispatch(getImage())
        } else {
          resolve(newImage)
        }

      } catch (error) {
        reject(error);
      }
    })
  };
};

export const approveImage = (img) => {
  return {
    type: types.approveImage.SUCCESS,
    payload: img
  };
};

export const rejectImage = (img) => {
  return {
    type: types.rejectImage.SUCCESS,
    payload: img
  };
};

export const getInitialState = (data) => {
  return {
    type: types.getInitialState.SUCCESS,
    payload: data
  };
};
