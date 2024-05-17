import React, { useEffect, useState } from "react";
import "./Index.css";

const Index = () => {
  const [company, setCompany] = useState([]);

  async function GetData() {
    var req = await fetch("https://localhost:7298/api/Companys/Get");
    var data = await req.json();
    setCompany(data);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <section className="company_box">
      <div className="company_box_all d-flex gap-3 flex-wrap">
        {company &&
          company.map((c) => (
            <div
              key={c.id}
              style={{ width: "24%" }}
              className="company_boxes d-flex flex-column gap-2 text-start"
            >
              <img src={c.logo} alt="" />
              <span className="company_boxes_name">{c.name}</span>
              <span className="company_boxes_count">
                {c.advertisments.length} elan
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Index;
