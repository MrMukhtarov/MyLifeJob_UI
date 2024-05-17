import React, { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";

const Index = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    try {
      const data = await axios.get("https://localhost:7298/api/Categorys/Get");
      setCategory(data.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <section className="category_box">
      <div className="category_box_all d-flex flex-wrap gap-3">
        {category &&
          category.map((c) => (
            <div
              style={{ width: "32%" }}
              className="category_box_boxes d-flex align-items-center gap-4"
            >
              <div className="category_box_boxes_img">
                <img src={c.logoUrl} alt="" />
              </div>
              <span className="category_box_boxes_name">{c.name}</span>
              <span className="category_box_boxes_count">
                {c.advertisments.length} elan
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Index;
