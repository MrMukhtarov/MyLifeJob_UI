import React from "react";
import "./Index.css";
import { FaTag } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdBook } from "react-icons/io";

const Index = () => {
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
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-2">
              <FaTag />
              <span>OOP</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Docker</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Javascript</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
            <div className="advertisment_bottom_left_detail_content_box d-flex align-items-center gap-1">
              <FaTag />
              <span>Rest</span>
            </div>
          </div>
          {/*  */}
          <h2 className="advertisment_bottom_left_detail_h mt-3">
            Vakansiyanın təsviri
          </h2>
          <div className="advertisment_bottom_left_explain">
            <ul>
              <li>
                <span>yeni veb-layihələr üzərində işləməsi;</span>
              </li>
              <li>
                <span>mövcud veb-layihələrin inkişaf etdirilməsi;</span>
              </li>
              <li>
                <span>komanda üzvü kimi veb-layihələr üzərində işləməsi;</span>
              </li>
              <li>
                <span>
                  layihələri planlaması, inkişaf etdirməsi, deploy etməsi və
                  baxımı;
                </span>
              </li>
              <li>
                <span>
                  məhsulun biznes məntiqinin və back-end sisteminin dizayn
                  olunması və proqramlaşdırılması;
                </span>
              </li>
              <li>
                <span>
                  front-end proqramçısı ilə sıx əməkdaşlıq edərək funksional,
                  effektli və tam tələblərə cavab verən API-ların hazırlanması;
                </span>
              </li>
              <li>
                <span>
                  mənbə kodlarını analiz etmək və ehtiyaca uyğun dəyişiklikləri
                  icra etməsi;
                </span>
              </li>
              <li>
                <span>
                  unit və inteqrasiya testlərinin yazılması və gündəlik
                  tapşırıqlar üçün avtomatik alətlərin hazırlanması;
                </span>
              </li>
            </ul>
          </div>
          {/*  */}
          <h2 className="advertisment_bottom_left_detail_h">Xüsusi tələblər</h2>
          <div className="advertisment_bottom_left_explain">
            <ul>
              <li>
                <span>OOP prinsiplərini aktiv istifadə etmə təcrübəsi;</span>
              </li>
              <li>
                <span>yeni texnologiyalari sürətlə öyrənmə həvəsi;</span>
              </li>
              <li>
                <span>
                  Php, Laravel framework, (Codeigniter bilmək üstünlükdür),
                  REST, MVC, Design patterns, MySQL, SQL, git.
                </span>
              </li>
              <li>
                <span>Docker, Kubernetes mühitlərində işləmə təcrübəsi;</span>
              </li>
              <li>
                <span>
                  proyektlərin yaradılması və komandaların formalaşmasında
                  təşəbbüskarlıq göstərmə təcrübəsi;
                </span>
              </li>
              <li>
                <span>agile metodologiyaları biliyi;</span>
              </li>
              <li>
                <span>CI/CD proseslərinin qurulması təcrübəsi;</span>
              </li>
              <li>
                <span>C#, ASP.Net Core bilikləri;</span>
              </li>
            </ul>
          </div>
          <div className="advertisment_bottom_left_contact">
            <p>
              Vakansiya ilə bağlı müraciət üçün CV formasını e-mail vasitəsilə
              mövzu yerinə{" "}
              <span style={{ fontWeight: "bold" }}>
                “Texniki ofis mühəndisi”
              </span>{" "}
              üzrə yazmaqla elektron ünvanına göndərməyiniz xahiş olunur. Yalnız
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
                <span>Razılaşma yolu ilə</span>
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
                <span>Development (Proqramlaşdırma)</span>
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
                <span>3-5</span>
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
                <span>Ali təhsil</span>
              </div>
            </div>
            <div className="advertisment_bottom_right_boxes_box_hr"></div>
          </div>
          {/*  */}
          <div className="advertisment_bottom_right_statistic d-flex flex-column">
            <div className="advertisment_bottom_right_statistic_top d-flex justify-content-between align-items-center">
              <div className="advertisment_bottom_right_statistic_top_left col-lg-6 d-flex flex-column text-start">
                <span className="advertisment_bottom_right_statistic_span1">Günlük</span>
                <span className="advertisment_bottom_right_statistic_span2">116</span>
              </div>
              <div className="advertisment_bottom_right_statistic_top_right col-lg-6 d-flex flex-column text-start">
                <span className="advertisment_bottom_right_statistic_span1">Həftəlik</span>
                <span className="advertisment_bottom_right_statistic_span2">245</span>
              </div>
            </div>
            <div className="advertisment_bottom_right_statistic_bottom col-lg-12 d-flex flex-column text-start">
              <span className="advertisment_bottom_right_statistic_span1">Aylıq</span>
              <span className="advertisment_bottom_right_statistic_span2">1639</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
