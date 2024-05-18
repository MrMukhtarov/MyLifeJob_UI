import React, { useContext, useState } from "react";
import "./Index.css";
import { IoIosSearch } from "react-icons/io";
import MyHomeSearchContext from "../../Contexts/HomeSearchContext";

const Index = () => {

  const { setState } = useContext(MyHomeSearchContext);

  const Search = (e) => {
    setState(e.target.value);
  };


  return (
    <section id="home_filter">
      <div className="home_filter_all d-flex gap-4 justify-content-between">
        <div className="home_filter_selects d-flex gap-4 col-lg-9">
          <select className="home_filter_select" name="" id="">
            <option selected defaultValue={true} value="Elanlar">
              Yerləşdirilib
            </option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
          </select>

          <select className="home_filter_select" name="" id="">
            <option selected defaultValue={true} value="Elanlar">
              Sıralama
            </option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
          </select>

          <select className="home_filter_select" name="" id="">
            <option selected defaultValue={true} value="Elanlar">
              Maaş
            </option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
          </select>

          <select className="home_filter_select" name="" id="">
            <option selected defaultValue={true} value="Elanlar">
              Ərazi
            </option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
            <option value="asdasd">sadsadsa</option>
          </select>
        </div>
        <div className="home_filter_search col-lg-3">
          <input type="text" onChange={Search} placeholder="Axtarış..." />
          <IoIosSearch />
        </div>
      </div>
    </section>
  );
};

export default Index;
