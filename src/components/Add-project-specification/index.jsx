import React from "react";
import "./style.css";

import Item from "../../assets/img/item.png";
import Graph from "../../assets/img/graph.png";
import IconSize from "../../assets/img/Icon-size.svg";
import IconFile from "../../assets/img/icon_file.svg";
import IconDoc from "../../assets/img/icon_doc.svg";
import IconXls from "../../assets/img/icon_xls.svg";
import ArrowLeft from "../../assets/img/ArrowLeft.svg";

export default function AddProjectSpecification() {
  const handleClick = () => {
    console.log("vasya");
  };

  return (
    <main>
      <div className="main-wrapper container">
        <form onSubmit={handleClick} className="form" action="#">
          <div className="state-wrapper">
            
            <h2 className="main-form__title"><img src={ArrowLeft} alt="" />Spec #0001</h2>
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
          <div className="info_panel">
            <div className="info_panel__left">
              <div className="left__perfomance">
                <div className="left__title">Perfomance chart</div>
                <div className="perfomance__graph">
                  <img src={Graph} alt="" className="graph" />
                </div>
              </div>
              <div className="left__system">
                <div className="left__title">System parameters</div>
                <div className="system__top__model-quantity">
                  <div className="system__top model">
                    <div className="system__top__title">Model:</div>
                    <div className="system__top__text">GR31-114911</div>
                  </div>
                  <div className="system__top quantity">
                    <div className="system__top__title">Model:</div>
                    <div className="system__top__text">GR31-114911</div>
                  </div>
                </div>
                <div className="system__line"></div>
                <div className="system__main">
                  <div className="system__main__info">
                    <ul className="info__list_title">
                      <li>Airflow:</li>
                      <li>Static pressure:</li>
                      <li>Power supply:</li>
                      <li>Control:</li>
                    </ul>
                    <ul className="info__list_text">
                      <li>12 000</li>
                      <li>4,5 w.g.</li>
                      <li>208V / 3PH</li>
                      <li>Manual</li>
                    </ul>
                  </div>
                  <div className="system__main__info">
                    <ul className="info__list_title">
                      <li>Fan size:</li>
                      <li>Width:</li>
                      <li>Height:</li>
                      <li>Depth:</li>
                    </ul>
                    <ul className="info__list_text">
                      <li>315 mm</li>
                      <li>84”</li>
                      <li>52”</li>
                      <li>36”</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="left__solution">
                <div className="left__title">Perfomance chart</div>
                <div className="solution__render">
                  <img
                    className="solution__render__button"
                    src={IconSize}
                    alt=""
                  />
                  <img src={Item} alt="" className="solution__render__item" />
                </div>
              </div>
            </div>
            <div className="info_panel__right">
              <div className="right__project_name">
                <p className="project_name__title">
                  Project name, which could be long enough
                </p>
                <p className="project_name__subtitle">Company name</p>
                <p className="project_name__text">
                  Location, Address, Street etc, long text to check
                </p>
              </div>
              <div className="right__export_to">
                <p className="export_to__title">Export to</p>
                <ul className="export_to__documents">
                  <a href="" className="export_to__doc">
                    <img className="export_to__icon_1" src={IconFile} alt="" />
                    <p className="export_to__documents__text">Manufactoring file</p>
                  </a>
                  <a href="" className="export_to__doc">
                    <img className="export_to__icon_2" src={IconDoc} alt="" />
                    <p className="export_to__documents__text">Submittal</p>
                  </a>
                  <a href="" className="export_to__doc">
                    <img className="export_to__icon_3" src={IconXls} alt="" />
                    <p className="export_to__documents__text">Quote</p>
                  </a>
                </ul>
              </div>
              <button className="right__button_save">Save</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
