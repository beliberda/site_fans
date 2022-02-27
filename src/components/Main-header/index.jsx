import React from 'react';
import './style.css';

import { ReactComponent as List } from '../../assets/img/list.svg';
import { ReactComponent as Slider } from '../../assets/img/slider.svg';
import { ReactComponent as Search } from '../../assets/img/search.svg';

function MainHeader() {
  return (
    <section className='main-header'>
      <h2 className='main-header__title'>Clients</h2>

      <div className='main-header__sort'>
        <p>Sort:</p>
        <button className='main-header__sort-left active-button'>
          Companies
        </button>
        <button className='main-header__sort-right'>Status</button>
      </div>

      <div className='main-header__view'>
        <p>View:</p>
        <button className='main-header__view-list active-button'>
          <List />
        </button>
        <button className='main-header__view-slider'>
          <Slider />
        </button>

        <form
          className='search-form'
          action='https://echo.htmlacademy.ru'
          method='post'
        >
          <input
            className='search-form__input'
            type='search'
            name='search'
            id='search'
            placeholder='Search'
          />
          <button
            type='submit'
            className='search-form__button'
            htmlFor='search'
          >
            <Search />
          </button>
        </form>
      </div>
    </section>
  );
}

export default MainHeader;
