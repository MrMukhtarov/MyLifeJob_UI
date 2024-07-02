import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { FaRegEye } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegFlag } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Complain from "../../AdvertismentDetail/Complain/İndex";
import AdvertismentDetailContext from "../../Contexts/AdvertismentDetailContenxt";

const Index = () => {
  const [seeEmail, setSeeEmail] = useState(false);
  const {adverDetail} = useContext(AdvertismentDetailContext);


  const SeeEmail = () => {
    setSeeEmail(true);
  };
  const seeBtn = () => {
    setSeeEmail(false);
  };
  const CopyEmail = () => {
    navigator.clipboard.writeText(
      document.querySelector(".grenn_btn_adv_info_email").textContent
    );
    document.getElementById("grenn_btn_adv_info_span").textContent =
      "E-mail ünvanı kopyalandı";
    document.getElementById("grenn_btn_adv_info").className =
      "grenn_btn_adv_info_success";
  };

  const monhths = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const day = adverDetail && adverDetail.endTime && adverDetail.endTime.substring(8, 10);
  const monthNumber = parseInt(adverDetail && adverDetail.endTime && adverDetail.endTime.substring(5, 7), 10);
  const monthIndex = monthNumber - 1;
  const monthName = monhths[monthIndex];
  const year = adverDetail && adverDetail.endTime && adverDetail.endTime.substring(0, 4);

  return (
    <section className="advertisment_detail_top">
      <div className="advertisment_detail_top_all d-flex flex-column gap-4">
        <div className="advertisment_detail_top_top d-flex justify-content-between align-items-center">
          <div className="advertisment_detail_top_top_left d-flex align-items-center gap-2">
            <img
              src={adverDetail.company && adverDetail.company.logo && adverDetail.company.logo}
              alt=""
            />
            <span>{adverDetail.company && adverDetail.company.name}</span>
          </div>
          <div className="advertisment_detail_top_top_right d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1 advertisment_detail_eye">
              <FaRegEye />
              <span>{adverDetail.viewCount}</span>
            </div>
            <div
              style={{
                backgroundColor: "#6f757e",
                width: "1px",
                height: "20px",
              }}
            ></div>
            <div className="advertisment_detail_heart d-flex">
              <svg
                className="me-2 heart-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  fill="#fff"
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="advertisment_detail_top_center d-flex justify-content-between align-items-center">
          <div className="advertisment_detail_top_center_left">
            <div className="advertisment_detail_top_center_left_top d-flex align-items-center">
              <h1>
                {adverDetail.title}
              </h1>
              <span>YENI</span>
            </div>
            <div className="advertisment_detail_top_center_left_bottom d-flex align-items-center gap-3">
              <div className="advertisment_detail_top_center_left_bottom_left d-flex align-items-center gap-2 justify-content-center">
                <CiClock2 />
                <span>Deadline 
                {" "} {day} {monthName} {year}
                      </span>
              </div>
              <div className="advertisment_detail_top_center_left_bottom_right">
                <span>{adverDetail.category}</span>
              </div>
            </div>
          </div>
          {seeEmail === false ? (
            <div
              id="advertisment_detail_top_center_right"
              onClick={SeeEmail}
              className="advertisment_detail_top_center_right d-flex align-items-center gap-2"
            >
              <FaLocationArrow />
              <span>Müraciət et</span>
            </div>
          ) : (
            <div className="grenn_btn_adv_div">
              <div className="grenn_btn_adv_info" id="grenn_btn_adv_info">
                <span id="grenn_btn_adv_info_span">
                  Müraciət üçün aşağıdakı email ünvanı <br /> köçürmək lazımdır.
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 grenn_btn_adv">
                <IoMdClose onClick={seeBtn} />
                <div className="grenn_btn_adv_hr"></div>
                <span className="grenn_btn_adv_info_email" onClick={CopyEmail}>
                  {adverDetail.company.email}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="advertisment_detail_top_bottom d-flex justify-content-between align-items-center">
          <div className="advertisment_detail_top_bottom_left d-flex align-items-center gap-3">
            <NavLink to="/">Digər vakansiyalar</NavLink>
            <NavLink to="/">Şirkət Haqqında</NavLink>
          </div>
          <div className="advertisment_detail_top_bottom_right d-flex align-items-center gap-3">
            <div
              style={{ cursor: "pointer" }}
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              className="advertisment_detail_top_bottom_right_left d-flex align-items-center gap-2"
            >
              <FaRegFlag />
              <span>Şikayət et</span>
            </div>
            <div
              className="advertisment_detail_top_bottom_right_center"
              style={{
                backgroundColor: "#6f757e",
                width: "1px",
                height: "20px",
              }}
            ></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => window.print()}
              className="advertisment_detail_top_bottom_right_right d-flex align-items-center gap-2"
            >
              <FiPrinter />
              <span>Çap et</span>
            </div>
          </div>
        </div>
      </div>
      <Complain />
    </section>
  );
};

export default Index;
