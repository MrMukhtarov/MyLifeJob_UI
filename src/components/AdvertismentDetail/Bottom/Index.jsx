import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { FaTag } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdBook } from "react-icons/io";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdvertismentDetailContext from "../../Contexts/AdvertismentDetailContenxt";

const Index = () => {
  const [adver, setAdver] = useState("");
  const { id } = useParams("id");
  const {setAdverDetail} = useContext(AdvertismentDetailContext)

  useEffect(() => {
    GetData(id);
  }, [id]);

  async function GetData(id) {
    var req = await axios.get(
      `https://localhost:7298/api/Advertisments/GetByClient/${id}`
    );
    var data = await req.data;
    setAdver(data);
    setAdverDetail(data);
  }

  return (
    <section className="advertisment_bottom">
      <div className="advertisment_bottom_all d-flex gap-4">
        <div className="advertisment_bottom_left col-lg-8">
          <h2 className="advertisment_bottom_left_detail_h">
            Vakansiyanın detalları
          </h2>
          <div className="advertisment_bottom_left_detail_workhour">
            <span className="advertisment_bottom_left_detail_workhour_span1">
              Məşğuliyyət:
            </span>
            <span className="advertisment_bottom_left_detail_workhour_span2">
              Tam iş günü
            </span>
          </div>
          <div className="advertisment_bottom_left_detail_content d-flex align-items-center gap-1 flex-wrap">
            {adver.advertismentAbilities &&
              adver.advertismentAbilities.map((c) => (
                <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-2">
                  <FaTag />
                  <span>{c.ability.name}</span>
                </div>
              ))}
          </div>
          {/*  */}
          <h2 className="advertisment_bottom_left_detail_h mt-3">
            Vakansiyanın təsviri
          </h2>
          <div className="advertisment_bottom_left_explain">
            <ul>
              {adver.texts &&
                adver.texts.map((a) => (
                  <li>
                    <span>{a.content};</span>
                  </li>
                ))}
            </ul>
          </div>
          {/*  */}
          <h2 className="advertisment_bottom_left_detail_h">Xüsusi tələblər</h2>
          <div className="advertisment_bottom_left_explain">
            <ul>
              {adver.requirements &&
                adver.requirements.map((a) => (
                  <li>
                    <span>{a.content};</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="advertisment_bottom_left_contact">
            <p>
              Vakansiya ilə bağlı müraciət üçün CV formasını e-mail vasitəsilə
              mövzu yerinə{" "}
              <span style={{ fontWeight: "bold" }}>“{adver.title}”</span> üzrə
              yazmaqla elektron ünvanına göndərməyiniz xahiş olunur. Yalnız
              vakansiya tələblərinə uyğun namizədlərlə əlaqə saxlanılacaqdır.
            </p>
          </div>
          {/* <div className="advertisment_bottom_left_contact">
            <p>
            Vakansiyaya <span style={{fontWeight:"bold"}}>TuranBank ASC-nin “İşə Qəbul Portalı”nda qeydiyyatdan keçərək</span> müraciət edə bilərsiniz.
            </p>
          </div> */}
        </div>
        <div className="advertisment_bottom_right col-lg-4">
          <h2>VAKANSİYA HAQQINDA</h2>
          <div className="advertisment_bottom_right_boxes d-flex flex-column gap-3">
            <div className="advertisment_bottom_right_boxes_box d-flex align-items-center gap-2">
              <div className="advertisment_bottom_right_boxes_box_left">
                <CiWallet />
              </div>
              <div className="advertisment_bottom_right_boxes_box_right">
                <h5>Əmək haqqı</h5>
                {adver.salary !== null ? (
                  <span>{adver.salary} AZN</span>
                ) : (
                  <span>Razılaşma yolu ilə</span>
                )}
              </div>
            </div>
            <div className="advertisment_bottom_right_boxes_box_hr"></div>
            {/*  */}
            <div className="advertisment_bottom_right_boxes_box d-flex align-items-center gap-2">
              <div className="advertisment_bottom_right_boxes_box_left">
                <CiHome />
              </div>
              <div className="advertisment_bottom_right_boxes_box_right">
                <h5>Kateqoriya</h5>
                <span>{adver.category}</span>
              </div>
            </div>
            <div className="advertisment_bottom_right_boxes_box_hr"></div>
            {/*  */}
            <div className="advertisment_bottom_right_boxes_box d-flex align-items-center gap-2">
              <div className="advertisment_bottom_right_boxes_box_left">
                <VscWorkspaceTrusted />
              </div>
              <div className="advertisment_bottom_right_boxes_box_right">
                <h5>İş stajı(il)</h5>
                <span>{adver.experience}</span>
              </div>
            </div>
            <div className="advertisment_bottom_right_boxes_box_hr"></div>
            {/*  */}
            <div className="advertisment_bottom_right_boxes_box d-flex align-items-center gap-2">
              <div className="advertisment_bottom_right_boxes_box_left">
                <IoMdBook />
              </div>
              <div className="advertisment_bottom_right_boxes_box_right">
                <h5>Tələb olunan təhsil</h5>
                <span>{
                  adver.education === "Middle" ? "Orta Təhsil" : adver.education === "Bachelor" ? "Bakalavr" : "Magistr"
                  }</span>
              </div>
            </div>
            <div className="advertisment_bottom_right_boxes_box_hr"></div>
          </div>
          {/*  */}
          <div className="advertisment_bottom_right_statistic d-flex flex-column">
            <div className="advertisment_bottom_right_statistic_top d-flex justify-content-between align-items-center">
              <div className="advertisment_bottom_right_statistic_top_left col-lg-6 d-flex flex-column text-start">
                <span className="advertisment_bottom_right_statistic_span1">
                  Günlük
                </span>
                <span className="advertisment_bottom_right_statistic_span2">
                  {adver.adverCount && adver.adverCount.day}
                </span>
              </div>
              <div className="advertisment_bottom_right_statistic_top_right col-lg-6 d-flex flex-column text-start">
                <span className="advertisment_bottom_right_statistic_span1">
                  Həftəlik
                </span>
                <span className="advertisment_bottom_right_statistic_span2">
                {adver.adverCount && adver.adverCount.week}
                </span>
              </div>
            </div>
            <div className="advertisment_bottom_right_statistic_bottom col-lg-12 d-flex flex-column text-start">
              <span className="advertisment_bottom_right_statistic_span1">
                Aylıq
              </span>
              <span className="advertisment_bottom_right_statistic_span2">
              {adver.adverCount && adver.adverCount.month}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
