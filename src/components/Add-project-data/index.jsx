import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function AddProjectData() {
  const handleClick = () => {
    console.log('vasya');
  };

  return (
    <main>
      <div className='main-wrapper container'>
        <form onSubmit={handleClick} className='form' action='#'>
          <div className='state-wrapper'>
            <h2 className='main-form__title'>Project creation</h2>
            <section className='add-state'>
              <span className='add-state__item add-state__item--active add-state__data'>
                <div className='add-state__number add-state__number--active'>
                  1
                </div>
                Data input
              </span>
              <span className='add-state__item add-state__solutions'>
                <div className='add-state__number'>2</div> Generated solutions
              </span>
              <span className='add-state__item add-state__specification'>
                <div className='add-state__number'>3</div> Choosen specification
              </span>
            </section>
          </div>

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

              <label for='location' className='label'>
                Location
              </label>
              <input
                id='location'
                onChange={handleClick}
                className='input'
                type='text'
                placeholder='eg north wing of the complex'
                required
              />

              <label for='Project' className='label'>
                Project name
              </label>
              <input
                id='Project'
                onChange={handleClick}
                className='input'
                type='text'
                placeholder='lorem ipsum'
                required
              />
            </div>
          </fieldset>

          <fieldset className='form__general'>
            <h3>System parameters</h3>

            <div className='label-wrapper'>
              <div className='label-wrapper__state'>
                <div className='label-state'>
                  <label for='Airflow' className='label'>
                    Airflow (CFM)
                  </label>
                  <input
                    id='Airflow'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='0'
                    required
                  />
                </div>

                <div className='label-state'>
                  <label for='Pressure' className='label'>
                    Pressure (in.w.g)
                  </label>
                  <input
                    id='Pressure'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='0,00'
                    required
                  />
                </div>
              </div>

              <div className='label-wrapper__state'>
                <div className='label-state'>
                  <label for='fan power' className='label'>
                    Installed fan power
                  </label>
                  <input
                    id='fan power'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='0,00'
                    required
                  />
                </div>

                <div className='label-state'>
                  <label for='consumed current' className='label'>
                    Installed fan consumed current
                  </label>
                  <input
                    id='consumed current'
                    onChange={handleClick}
                    className='input'
                    type='text'
                    placeholder='0,00'
                    required
                  />
                </div>
              </div>

              <label for='reserve' className='label'>
                Minimum air flow reserve
              </label>
              <input
                id='reserve'
                onChange={handleClick}
                className='input'
                type='number'
                placeholder='0,00%'
                required
              />
            </div>
          </fieldset>

          <fieldset className='form__general'>
            <h3>Fan parameters</h3>

            <div className='label-wrapper'>
              <div className='label-wrapper__inch'>
                <div className='label-inch'>
                  <label for='Width' className='label'>
                    Width (inch)
                  </label>
                  <input
                    id='Width'
                    onChange={handleClick}
                    className='input__inch'
                    type='text'
                    placeholder='0,000'
                    required
                  />
                </div>

                <div className='label-inch'>
                  <label for='Height' className='label'>
                    Height (inch)
                  </label>
                  <input
                    id='Height'
                    onChange={handleClick}
                    className='input__inch'
                    type='text'
                    placeholder='0,000'
                    required
                  />
                </div>

                <div className='label-inch'>
                  <label for='Depth' className='label'>
                    Section Depth (inch)
                  </label>
                  <input
                    id='Depth'
                    onChange={handleClick}
                    className='input__inch'
                    type='text'
                    placeholder='0,000'
                    required
                  />
                </div>
              </div>

              <div className='label'>Power supply</div>

              <ul className='power-supply__list'>
                <li className='power-supply__item'>
                  <input type='radio' id='115v1' name='power-type' checked />
                  <label for='115v1'>115V/1PH</label>
                </li>

                <li className='power-supply__item'>
                  <input type='radio' id='208v1' name='power-type' />
                  <label for='208v1'>208V/1PH</label>
                </li>

                <li className='power-supply__item'>
                  <input type='radio' id='208v3' name='power-type' />
                  <label for='208v3'>208V/3PH</label>
                </li>

                <li className='power-supply__item'>
                  <input type='radio' id='460v3' name='power-type' />
                  <label for='460v3'>460V/3PH</label>
                </li>
              </ul>

              <label for='blades-diameter' className='label'>
                Fan blades diameter (mm)
              </label>
              <select className='input' name='diameter' id='blades-diameter'>
                <option value=''>Select fan size</option>
                <option value='400'>400</option>
                <option value='500'>500</option>
              </select>

              <div className='label'>Control</div>

              <ul className='power-supply__list'>
                <li className='power-supply__item'>
                  <input type='radio' id='Manual' name='Control' checked />
                  <label for='Manual'>Manual</label>
                </li>

                <li className='power-supply__item'>
                  <input type='radio' id='BACnet' name='Control' />
                  <label for='BACnet'>BACnet controller </label>
                </li>
              </ul>
            </div>
          </fieldset>

          <div className='button-wrapper'>
            <Link
              to='/add_project_solutions'
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
