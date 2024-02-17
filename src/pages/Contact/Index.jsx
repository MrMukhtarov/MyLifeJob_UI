import React from "react";
import "./Index.css";

const Index = () => {
  return (
    <section className="contact w-50 m-auto">
      <h1 className="contact_heading">Əlaqə</h1>
      <div className="contact_adress d-flex mb-4 align-items-center justify-content-between">
        <h2>Address</h2>
        <span>
          8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə. Bakı, AZ
          1025, Azərbaycan
        </span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388952.0358157401!2d49.26406131314835!3d40.393611920531086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1708178537279!5m2!1saz!2saz"
        width="100%"
        height="250"
        style={{ border: "0;" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="mb-3"
      ></iframe>
      <div className="contact_phone_div">
        <div className="contact_phone_div_box d-flex gap-5">
          <h2>Telephone</h2>
          <div className="contact_phone_div_box_right d-flex flex-column ms-5 gap-2">
            <span>+994 12 434 50 30</span>
            <span>+994 12 488 64 91</span>
            <span>+994 12 488 64 92 </span>
          </div>
        </div>
      </div>

      <div className="contact_phone_div">
        <div className="contact_phone_div_box d-flex gap-5">
          <h2 className="me-4">Mobile</h2>
          <div className="contact_phone_div_box_right d-flex flex-column ms-5 gap-2">
            <span>+994 50 205 66 20</span>
            <span>+994 50 208 90 25</span>
          </div>
        </div>
      </div>

      <div className="contact_phone_div">
        <div className="contact_phone_div_box d-flex gap-5">
          <h2 className="me-4">Email</h2>
          <div className="contact_phone_div_box_right d-flex flex-column ms-5 gap-2">
            <span style={{marginLeft:"13px"}}>info@jobsearch.az</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
