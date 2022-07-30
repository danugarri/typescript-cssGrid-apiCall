import React from 'react';
import './App.css';
import { Instructions } from './components/instructions/Instructions';
import { PhotosView } from './components/photosView/PhotosView';

function App() {
  return (
    <React.Fragment>
      <PhotosView />
    </React.Fragment>
  );
}

export default App;
