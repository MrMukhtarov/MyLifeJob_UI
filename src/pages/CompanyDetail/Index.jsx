import React from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <section className="company_detail">
      <div className="company_detail_all d-flex">
        <div className="company_detail_left col-lg-5 d-flex flex-column gap-3">
          <div className="company_detail_left_top d-flex align-items-center gap-3">
            <div className="company_detail_left_top_left">
              <img
                src="https://storage.jobsearch.az/storage/pages/3918/expressbank.png"
                alt=""
              />
            </div>
            <div className="company_detail_left_top_right">
              <h1 className="mb-0">Express Bank</h1>
              <div className="company_detail_left_top_right_links">
                <NavLink className="me-1" to="/">
                  Banklar{" "}
                </NavLink>
                <NavLink to="/">Maliyyə xidmətləri </NavLink>
              </div>
            </div>
          </div>
          <div className="company_detail_left_bottom d-flex flex-column gap-3">
            <div className="company_detail_left_bottom_content d-flex flex-column gap-1">
              <span className="company_detail_left_bottom_content_span1">
                Address
              </span>
              <span className="company_detail_left_bottom_content_span2">
                Bakı, Azərbaycan, AZ1052, Atatürk pr., Yusif Vəzir Çəmənzəminli
                küç., 134 C
              </span>
            </div>

            <div className="company_detail_left_bottom_content d-flex flex-column gap-1">
              <span className="company_detail_left_bottom_content_span1">
                Phone Number
              </span>
              <span className="company_detail_left_bottom_content_span2">
                (+994 12) 132
              </span>
            </div>

            <div className="company_detail_left_bottom_content d-flex flex-column gap-1">
              <span className="company_detail_left_bottom_content_span1">
                Email
              </span>
              <span className="company_detail_left_bottom_content_span2">
                nicatmuxatr@gmail.com
              </span>
            </div>

            <div className="company_detail_left_bottom_content d-flex flex-column gap-1">
              <span className="company_detail_left_bottom_content_span1">
                Website
              </span>
              <NavLink
                to="/"
                className="company_detail_left_bottom_content_span2"
              >
                https://www.expressbank.az
              </NavLink>
            </div>
          </div>
        </div>
        <div className="company_detail_right col-lg-6">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active company_detail_tab_btn"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Şirkət haqqında
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link company_detail_tab_btn"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Son iş elanları
              </button>
            </li>
          </ul>
          <div className="tab-content company_info_for_detail_tab" id="pills-tabContent">
            <div
              className="tab-pane fade show active company_info_for_detail"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <h5>Şirkət haqqında</h5>
              <p>
                Hazırda mövcud banklar içində ilk kommersiya bankı olan
                “Expressbank” ASC 21 iyun 1989-cu il tarixində təsis olunmuş və
                uzun müddət “Azərnəqliyyatbank” adı altında fəaliyyət
                göstərmişdir. Bank öz fəaliyyətini Azərbaycan Respublikasının
                Mərkəzi Bankı tərəfindən 30 dekabr 1992–ci il tarixində verilmiş
                lisenziya əsasında həyata keçirir. Bankın Səhmdarlarının Ümumi
                Yığıncağının 01 fevral 2010-cu il tarixli qərarı ilə
                “Azərnəqliyyatbank” ASC-nin adı dəyişdirilərək “Expressbank” ASC
                adlandırılmış və Nizamnaməyə müvafiq dəyişiklik 04 mart 2010-cu
                il tarixində dövlət qeydiyyatına alınmışdır.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
                <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Elan</th>
            <th scope="col">Dərc Olunub</th>
            <th scope="col">Son Tarix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <div className="d-flex align-items-center">
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
                  <path fill="#fff" stroke="currentColor" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z" />
                </svg>
                <NavLink className="company_detail_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="company_detail_premium">PREMIUM</span>
              </div>
            </th>
            <td className="company_detail_date">
              <span>16 Fevral</span>
            </td>
            <td className="company_detail_date">
                <span>16 Mart</span>
            </td>
          </tr>

 
        </tbody>
      </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
