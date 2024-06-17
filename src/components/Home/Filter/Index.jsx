import React, { useContext } from "react";
import "./Index.css";
import { IoIosSearch } from "react-icons/io";
import MyHomeSearchContext from "../../Contexts/HomeSearchContext";
import HomeDateFilterContext from "../../Contexts/HomeDateFilterContext";

const Index = () => {
  const { setState } = useContext(MyHomeSearchContext);
  const { setDate, setCity, setSort, setSalary } = useContext(
    HomeDateFilterContext
  );

  const Search = (e) => {
    setState(e.target.value);
  };

  const FilterDate = (e) => {
    setDate(e);
  };
  const FilterSort = (e) => {
    setSort(e);
  };
  const FilterCity = (e) => {
    setCity(e);
  };
  const FilterSalary = (e) => {
    setSalary(e);
  };

  return (
    <section id="home_filter">
      <div className="home_filter_all d-flex gap-4 justify-content-between">
        <div className="home_filter_selects d-flex gap-4 col-lg-9">
          <select
            onChange={(e) => FilterDate(e.target.value)}
            className="home_filter_select"
            name=""
            id=""
          >
            <option selected defaultValue={true} value="">
              Yerləşdirilib
            </option>
            <option value="1">1 gün</option>
            <option value="3">3 gün</option>
            <option value="7">1 həftə</option>
            <option value="10">10 gün</option>
            <option value="14">2 həftə</option>
          </select>

          <select
            onChange={(e) => FilterSort(e.target.value)}
            className="home_filter_select"
            name=""
            id=""
          >
            <option selected defaultValue={true} value="">
              Sıralama
            </option>
            <option value="1">Maaş üzrə</option>
            <option value="2">Vəzifə adı A-Z</option>
            <option value="3">Şirkət adı A-Z</option>
            <option value="4">Ən çox baxış sayı</option>
          </select>

          <select
            onChange={(e) => FilterSalary(e.target.value)}
            className="home_filter_select"
            name=""
            id=""
          >
            <option selected defaultValue={true} value="">
              Maaş
            </option>
            <option value="1">0-500</option>
            <option value="2">500-1000</option>
            <option value="3">1000-2000</option>
            <option value="4">2000-5000</option>
            <option value="5">5000+</option>
          </select>

          <select
            onChange={(e) => FilterCity(e.target.value)}
            className="home_filter_select"
            name=""
            id=""
          >
            <option  selected defaultValue={true} value="">
              Ərazi
            </option>
            <option value="Ağcabədi">Ağcabədi</option>
            <option value="Ağdam">Ağdam</option>
            <option value="Ağdaş">Ağdaş</option>
            <option value="Ağdərə">Ağdərə</option>
            <option value="Ağstafa">Ağstafa</option>
            <option value="Ağsu">Ağsu</option>
            <option value="Astara">Astara</option>
            <option value="Bakı">Bakı</option>
            <option value="Balakən">Balakən</option>
            <option value="Beyləqan">Beyləqan</option>
            <option value="Biləsuvar">Biləsuvar</option>
            <option value="Cəbrayıl">Cəbrayıl</option>
            <option value="Cəlilabad">Cəlilabad</option>
            <option value="Daşkəsən">Daşkəsən</option>
            <option value="Füzuli">Füzuli</option>
            <option value="Gədəbəy">Gədəbəy</option>
            <option value="Gəncə">Gəncə</option>
            <option value="Goranboy">Goranboy</option>
            <option value="Göyçay">Göyçay</option>
            <option value="Göygöl">Göygöl</option>
            <option value="Göytəpə">Göytəpə</option>
            <option value="Hacıqabul">Hacıqabul</option>
            <option value="İmişli">İmişli</option>
            <option value="İsmayıllı">İsmayıllı</option>
            <option value="Kəlbəcər">Kəlbəcər</option>
            <option value="Kürdəmir">Kürdəmir</option>
            <option value="Laçın">Laçın</option>
            <option value="Lənkəran">Lənkəran</option>
            <option value="Lerik">Lerik</option>
            <option value="Masallı">Masallı</option>
            <option value="Mingəçevir">Mingəçevir</option>
            <option value="Naftalan">Naftalan</option>
            <option value="Naxçıvan">Naxçıvan</option>
            <option value="Neftçala">Neftçala</option>
            <option value="Oğuz">Oğuz</option>
            <option value="Ordubad">Ordubad</option>
            <option value="Qax">Qax</option>
            <option value="Qazax">Qazax</option>
            <option value="Qəbələ">Qəbələ</option>
            <option value="Qobustan">Qobustan</option>
            <option value="Quba">Quba</option>
            <option value="Qubadlı">Qubadlı</option>
            <option value="Qusar">Qusar</option>
            <option value="Saatlı">Saatlı</option>
            <option value="Sabirabad">Sabirabad</option>
            <option value="Şabran">Şabran</option>
            <option value="Şahbuz">Şahbuz</option>
            <option value="Şamaxı">Şamaxı</option>
            <option value="Şəki">Şəki</option>
            <option value="Şəmkir">Şəmkir</option>
            <option value="Şirvan">Şirvan</option>
            <option value="Siazan">Siazan</option>
            <option value="Sumqayıt">Sumqayıt</option>
            <option value="Şuşa">Şuşa</option>
            <option value="Tərtər">Tərtər</option>
            <option value="Toğuz">Toğuz</option>
            <option value="Ucar">Ucar</option>
            <option value="Xaçmaz">Xaçmaz</option>
            <option value="Xankəndi">Xankəndi</option>
            <option value="Xırdalan">Xırdalan</option>
            <option value="Xızı">Xızı</option>
            <option value="Xocalı">Xocalı</option>
            <option value="Xocavənd">Xocavənd</option>
            <option value="Yardımlı">Yardımlı</option>
            <option value="Yevlax">Yevlax</option>
            <option value="Zaqatala">Zaqatala</option>
            <option value="Zəngilan">Zəngilan</option>
            <option value="Zərdab">Zərdab</option>
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
