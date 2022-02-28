import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import Foto1 from "../../assets/img/foto1.jpg";
import Graph from "../../assets/img/graph.png";
import Ellipsis from "../../assets/img/ellipsis.svg";
import ArrowLeft from "../../assets/img/ArrowLeft.svg";
import question from "../../assets/img/Info.svg";

export default function AddProjectSolutions() {
  const handleClick = () => {
    console.log("vasya");
  };

  return (
    <main>
      <div className="main-wrapper container">
        <form onSubmit={handleClick} className="form" action="#">
          <div className="state-wrapper">
            <h2 className="main-form__title">
              <Link
                to="/add_project_data"
                className="button back__button"
                type="submit"
              >
                <img className="main-form__arrow" src={ArrowLeft} alt="" />
              </Link>
              Project creation
            </h2>
            <section className="add-state">
              <span className="add-state__item add-state__data">
                <div className="add-state__number">1</div>
                Data input
              </span>
              <span className="add-state__item add-state__item--active add-state__solutions">
                <div className="add-state__number add-state__number--active">
                  2
                </div>
                Generated solutions
              </span>
              <span className="add-state__item add-state__specification">
                <div className="add-state__number">3</div> Choosen specification
              </span>
            </section>
          </div>

          <ul className="info-panel">
            <li className="info-panel__item">
              <b>Airflow:</b>12 000
            </li>
            <li className="info-panel__item">
              <b>Pressure::</b>4.5
            </li>
            <li className="info-panel__item">
              <b>W:</b>65"
            </li>
            <li className="info-panel__item">
              <b>H:</b>73"
            </li>
            <li className="info-panel__item">
              <b>D:</b>120"
            </li>
            <li className="info-panel__item">
              <b>Power supply:</b>115V/1PH
            </li>
            <li className="info-panel__item">
              <b>Fan D:</b>215 mm
            </li>
            <li className="info-panel__item">
              <b>Control:</b>Manual
            </li>
          </ul>

          <div className="solutions">
            <ul className="solutions__list">
              <li className="solutions__item">
                <div className="solutions__item-left">
                  <h3>Spec #0001</h3>

                  <img src={Foto1} width="206px" height="249px" alt="foto1" />

                  <span className="solutions__actions">Actions: </span>

                  <div className="button-wrapper button-wrapper__solutions">
                    <Link
                      to="/add_project_specification"
                      className="button form__button select_button"
                      type="submit"
                    >
                      Select
                    </Link>

                    <button
                      className="button form__button more__button"
                      type="submit"
                    >
                      <img src={Ellipsis} alt="" />
                    </button>
                  </div>
                </div>

                <div className="solutions__item-right">
                  <div className="solutions__item-right-title">
                    <p className="main-form__sub-title">
                      Model: <span>GR31-114911</span>
                    </p>
                    <p className="main-form__sub-title">
                      Quantity:<span>4</span>
                    </p>
                  </div>

                  <img src={Graph} width="583px" height="257px" alt="graph" />

                  <section className="system-parameters">
                    <p className="system-parameters__title">
                      System parameters:
                    </p>

                    <div className="system-parameters__info">
                      <ul className="system-parameters__list">
                        <li className="system-parameters__item">
                          <span>Airflow:</span>
                          12 000
                        </li>
                        <li className="system-parameters__item">
                          <span>Static pressure:</span>
                          4,5 w.g.
                        </li>
                        <li className="system-parameters__item">
                          <span>Power supply:</span>
                          208V / 3PH
                        </li>
                        <li className="system-parameters__item">
                          <span>Control:</span>
                          <p>
                            Manual
                            <img className="system-parameters__manual" src={question} alt="" />
                          </p>
                        </li>
                      </ul>

                      <ul className="system-parameters__list">
                        <li className="system-parameters__item">
                          <span>Fan size:</span>
                          315 mm
                        </li>
                        <li className="system-parameters__item">
                          <span>Width:</span>
                          12 000
                        </li>
                        <li className="system-parameters__item">
                          <span>Height:</span>
                          52”
                        </li>
                        <li className="system-parameters__item">
                          <span>Depth:</span>
                          36”
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </li>

              <li className="solutions__item">
                <div className="solutions__item-left">
                  <h3>Spec #0001</h3>

                  <img src={Foto1} width="206px" height="249px" alt="foto1" />

                  <span className="solutions__actions">Actions: </span>

                  <div className="button-wrapper button-wrapper__solutions">
                    <Link
                      to="/add_project_specification"
                      className="button form__button select_button"
                      type="submit"
                    >
                      Select
                    </Link>

                    <button
                      className="button form__button more__button"
                      type="submit"
                    >
                      <img src={Ellipsis} alt="" />
                    </button>
                  </div>
                </div>

                <div className="solutions__item-right">
                  <div className="solutions__item-right-title">
                    <p className="main-form__sub-title">
                      Model: <span>GR31-114911</span>
                    </p>
                    <p className="main-form__sub-title">
                      Quantity:<span>4</span>
                    </p>
                  </div>

                  <img src={Graph} width="583px" height="257px" alt="graph" />

                  <section className="system-parameters">
                    <p className="system-parameters__title">
                      System parameters:
                    </p>

                    <div className="system-parameters__info">
                      <ul className="system-parameters__list">
                        <li className="system-parameters__item">
                          <span>Airflow:</span>
                          12 000
                        </li>
                        <li className="system-parameters__item">
                          <span>Static pressure:</span>
                          4,5 w.g.
                        </li>
                        <li className="system-parameters__item">
                          <span>Power supply:</span>
                          208V / 3PH
                        </li>
                        <li className="system-parameters__item">
                          <span>Control:</span>
                          <p>
                            Manual
                            <img className="system-parameters__manual" src={question} alt="" />
                          </p>
                        </li>
                      </ul>

                      <ul className="system-parameters__list">
                        <li className="system-parameters__item">
                          <span>Fan size:</span>
                          315 mm
                        </li>
                        <li className="system-parameters__item">
                          <span>Width:</span>
                          12 000
                        </li>
                        <li className="system-parameters__item">
                          <span>Height:</span>
                          52”
                        </li>
                        <li className="system-parameters__item">
                          <span>Depth:</span>
                          36”
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </li>
            </ul>

            <section className="info-panel-right">
              <p className="info-panel-right__title">
                Project name, which could be long enough
              </p>

              <span className="info-panel-right__subtitle">Company name</span>
              <p>Location, Address, Street etc, long text to check</p>
            </section>
          </div>
        </form>
      </div>
    </main>
  );
}
