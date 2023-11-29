import './styles/reset.css';
import './styles/index.css';

import HomePage from './pages/HomePage';
import React from 'react';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, fab, far);

function App() {
  return (
    <div className='App'>
      <HomePage />
    </div>
  );
}

export default App;
