import React from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";

const Index = () => {

  return (
    <section id="home_advertisment" style={{minHeight:"100vh"}}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Elan</th>
            <th scope="col">Şirkət</th>
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_premium">PREMIUM</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
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
                <NavLink className="home_advertisment_name" to="/">
                  <p className="mb-0">Administrative Assistant (female)</p>
                </NavLink>
                <span className="home_advertisment_new">YENI</span>
              </div>
            </th>
            <td>
              <div className="home_advertisment_company d-flex align-items-center gap-1">
                <img
                  src="https://storage.jobsearch.az/storage/pages/14946/cubics.svg"
                  alt=""
                />
                <span>Cubics Technology</span>
              </div>
            </td>
            <td className="home_advertisment_date">
              <span>16 Fevral</span>
            </td>
            <td className="home_advertisment_date">
                <span>16 Mart</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Index;
