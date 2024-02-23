import React, { useState } from "react";
import "./Index.css";
import { FaLocationArrow } from "react-icons/fa";

const İndex = () => {
    const [area, setArea] = useState(false);

    const OpenTextArea = () => {
        setArea(true);
    }
    const CloseTextArea = () => {
        setArea(false);
    }

  return (
    <section className="advertisment_complain">
      <div
        className="modal fade modal_main"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-header  px-5 py-4">
              <h1
                className="modal-title modal_title_h1 fs-5"
                id="exampleModalToggleLabel"
              >
                Şikayət et
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body  px-5 py-5">
              <div className="modal-body_all d-flex flex-wrap">
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="a" />
                  <label className="modal_body_box_label" htmlFor="a">
                    Əlaqə saxlamaq olmur
                  </label>
                </div>
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="b" />
                  <label className="modal_body_box_label" htmlFor="b">
                    Elan aktual deyil
                  </label>
                </div>
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="c" />
                  <label className="modal_body_box_label" htmlFor="c">
                    Real iş elanı deyil
                  </label>
                </div>
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="d" />
                  <label className="modal_body_box_label" htmlFor="d">
                    Ünvan düzgün deyil
                  </label>
                </div>
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="e" />
                  <label className="modal_body_box_label" htmlFor="e">
                    İşin təsviri düzgün deyil
                  </label>
                </div>
                <div onClick={CloseTextArea} className="modal-body_box mb-4 col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="6" />
                  <label className="modal_body_box_label" htmlFor="6">
                    Əmək bazarı üzrə aşağı maaş təklifi
                  </label>
                </div>
                <div onClick={OpenTextArea} className="modal-body_box col-lg-6 d-flex align-items-center gap-2">
                  <input type="radio" name="complain" id="7" />
                  <label className="modal_body_box_label" htmlFor="7">
                    Digər
                  </label>
                </div>
              </div>
              {area === true ? 
                <textarea className="mt-3" name="" id="" cols="50" rows="3"></textarea> : ""  
            }
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary d-flex align-items-center gap-2 advertisment_complain_send_btn"
                // data-bs-target="#exampleModalToggle2"
                // data-bs-toggle="modal"
              >
                <FaLocationArrow/>
                <span>Göndər</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        className="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button> */}
    </section>
  );
};

export default İndex;
