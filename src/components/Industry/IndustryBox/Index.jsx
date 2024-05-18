import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import MyHomeSearchContext from "../../Contexts/HomeSearchContext";

const Index = () => {
  const [industry, setIndustry] = useState([]);
  const [search, setSearch] = useState(false);

  const { state } = useContext(MyHomeSearchContext);

  async function GetData() {
    const req = await fetch("https://localhost:7298/api/Industryies/Get");
    const data = await req.json();
    if (state) {
      setSearch(true);
    }
    if (search === true) {
      setIndustry(
        data.filter((a) => a.name.toUpperCase().includes(state.toUpperCase()))
      );
    } else {
      setIndustry(data);
    }
    if (state === "" || state === false) {
      setIndustry(data);
    }
  }

  useEffect(() => {
    GetData();
  }, [state]);

  console.log(industry);

  return (
    <section className="industry_box">
      <div className="industry_box_all d-flex flex-wrap gap-3">
        {industry &&
          industry.map((a) => {
            let countAdver = 0;
            a.companyIndustries &&
              a.companyIndustries.forEach((ci) => {
                countAdver += ci.company.advertisments.length;
              });
            return (
              <div
                style={{ width: "32%" }}
                className="industry_box_boxes d-flex align-items-center gap-4"
              >
                <div className="industry_box_boxes_img">
                  <img src={a.logo} alt="" />
                </div>
                <span className="industry_box_boxes_name">{a.name}</span>
                <span className="industry_box_boxes_count">
                  {} {countAdver} elan
                </span>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Index;
