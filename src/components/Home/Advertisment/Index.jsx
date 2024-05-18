import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MyHomeSearchContext from "../../Contexts/HomeSearchContext";

const Index = () => {
  const [adver, setAdver] = useState([]);
  const [search, setSearch] = useState(false);

  const { state } = useContext(MyHomeSearchContext);

  useEffect(() => {
    axios
      .get("https://localhost:7298/api/Advertisments/Get")
      .then((res) => {
        if (state) {
          setSearch(true);
        }
        if (search === true) {
          setAdver(
            res.data.filter((a) =>
              a.title.toUpperCase().includes(state.toUpperCase())
            )
          );
        } else {
          setAdver(res.data);
        }
        if (state === "" || state === false) {
          setAdver(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state, search]);

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

  return (
    <section id="home_advertisment" style={{ minHeight: "100vh" }}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Elan</th>
            <th scope="col">Şirkət</th>
            <th scope="col">Dərc Olunub</th>
            <th scope="col">Son Tarix</th>
          </tr>
        </thead>
        <tbody>
          {adver &&
            adver.map((a) => (
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
                      <path
                        fill="#fff"
                        stroke="currentColor"
                        strokeWidth={2}
                        d="M12 21.35l-1.45-1.32C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 2.78-3.4 5.75-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    <NavLink className="home_advertisment_name" to="/">
                      <p className="mb-0">{a.title}</p>
                    </NavLink>
                    <span className="home_advertisment_premium">PREMIUM</span>
                  </div>
                </th>
                <td>
                  <div className="home_advertisment_company d-flex align-items-center gap-1">
                    <img
                      className="home_advertisment_company_img"
                      src={a.company.logo}
                      alt=""
                    />
                    <span>{a.company.name}</span>
                  </div>
                </td>
                <td className="home_advertisment_date">
                  <span>
                    {a.createDate.substring(8, 10)}{" "}
                    {a.createDate.substring(5, 7) < 10
                      ? monhths[a.createDate.substring(6, 7) - 1]
                      : monhths[a.createDate.substring(5, 7) - 1]}
                  </span>
                </td>
                <td className="home_advertisment_date">
                  <span>
                    {a.endTime.substring(8, 10)}{" "}
                    {a.endTime.substring(5, 7) < 10
                      ? monhths[a.endTime.substring(6, 7) - 1]
                      : monhths[a.endTime.substring(5, 7) - 1]}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default Index;
