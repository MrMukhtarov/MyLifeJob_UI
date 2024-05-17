import React, { useEffect, useState } from "react";
import "./Index.css";

const Index = () => {
  const [industry, setIndustry] = useState([]);

  async function GetData() {
    const req = await fetch("https://localhost:7298/api/Industryies/Get");
    const data = await req.json();
    setIndustry(data);
  }

  useEffect(() => {
    GetData();
  }, []);

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
