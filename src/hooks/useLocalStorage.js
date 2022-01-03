import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getApprovedImages, getRejectedImages } from 'store/collection/selectors';
import { getInitialState } from 'store/collection/actions';

function getStorageValue(key, defaultValue = []) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

function setStorageValue(key, value) {
  // set value to localStorage
  localStorage.setItem(key, JSON.stringify(value));
}

export const useLocalStorage = () => {
  const dispatch = useDispatch();

  const approvedFromStore = useSelector(state => getApprovedImages(state))
  const rejectedFromStore = useSelector(state => getRejectedImages(state))

  //read data from local storage
  useEffect(() => {
    const approved = getStorageValue('approved');
    const rejected = getStorageValue('rejected');
    if (approved.length || rejected.length) {
      dispatch(getInitialState({approved, rejected}))
    }
  },[dispatch])

  //set approved images to local storage
  useEffect(() => {
    setStorageValue('approved', approvedFromStore)
  },[approvedFromStore])

  //set rejected images to local storage
  useEffect(() => {
    setStorageValue('rejected', rejectedFromStore)
  },[rejectedFromStore])

}
