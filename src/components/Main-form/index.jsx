import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function MainForm() {
  const handleClick = () => {
    console.log('vasya');
  };

  return (
    <main>
      <div className='main-wrapper container'>
        <form onSubmit={handleClick} className='form' action='#'>
          <h2 className='main-form__title'>Customer creation</h2>

          <fieldset className='form__general'>
            <h3>General information</h3>

            <div className='label-wrapper'>
              <label for='name' className='label'>
                Customer name
              </label>
              <input
                id='name'
                onChange={handleClick}
                className='input'
                type='text'
                placeholder='John Doe Ltd.'
                required
              />

              <label for='tel' className='label'>
                Contact
              </label>
              <input
                id='tel'
                onChange={handleClick}
                className='input'
                type='tel'
                pattern='2[0-9]{3}-[0-9]{3}'
                placeholder='+1 XXX-XXX-XXXX'
                required
              />

              <label for='email' className='label'>
                Email
              </label>
              <input
                id='email'
                onChange={handleClick}
                className='input'
                type='email'
                placeholder='Email@mail.com'
                required
              />
            </div>
          </fieldset>

          <fieldset className='form__adress'>
            <h3>Address</h3>

            <div className='label-wrapper'>
              <label for='address' className='label'>
                Street address
              </label>
              <input
                id='address'
                onChange={handleClick}
                className='input'
                type='text'
                placeholder='63 Jockey Hollow Dr. Rosemead'
                required
              />

              <div className='label-wrapper__state'>
                <div className='label-state'>
                  <label for='city' className='label'>
                    City
                  </label>
                  <input
                    id='city'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='Select City'
                    required
                  />
                </div>

                <div className='label-state'>
                  <label for='state' className='label'>
                    State
                  </label>
                  <input
                    id='state'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='Select State'
                    required
                  />
                </div>
              </div>

              <label for='post' className='label'>
                Zip/Postal code
              </label>
              <input
                id='post'
                onChange={handleClick}
                className='input'
                type='number'
                placeholder='11111'
                required
              />
            </div>
          </fieldset>

          <div className='button-wrapper'>
            <Link
              to='/add_project_data'
              className='button form__button'
              type='submit'
            >
              Submit
            </Link>
            <button className='button form__button' type='submit'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
