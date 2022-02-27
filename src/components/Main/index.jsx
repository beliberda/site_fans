import React from 'react';
import './style.css';

import MainHeader from '../Main-header';
import Add from '../Add';

function Main() {
  return (
    <main>
      <div className='main-wrapper container'>
        <MainHeader />
        <Add />
      </div>
    </main>
  );
}

export default Main;
