import React from 'react';
import { AppRouter } from './router'
import { Provider } from 'react-redux';
import { store } from './store'

const App = () => {
  return (
    <Provider store={ store }>
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <AppRouter />
    </div>
    </Provider>
  );
};

export default App;
