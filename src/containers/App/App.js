import React, {
  Fragment
} from 'react';
import Header from 'containers/Header';
import Collection from 'containers/Collection';
import ImagePreview from 'containers/ImagePreview';
import Controls from 'containers/Controls';
import { useLocalStorage } from 'hooks/useLocalStorage'

import './App.css';

const App = () => {
  useLocalStorage();

  return <Fragment>
    <Header />
    <Collection />
    <ImagePreview />
    <Controls />
  </Fragment>
}

export default App;
