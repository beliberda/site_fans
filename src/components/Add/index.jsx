import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Add() {
  return (
    <section className='add'>
      <p className='add__text'>
        You haven't added any clients yet. Let's start with the first
      </p>
      <Link to='/reg' className='add_button'>
        Add company
      </Link>
    </section>
  );
}

export default Add;
