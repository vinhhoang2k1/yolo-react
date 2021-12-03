import { useState } from "react";
import List from "../list";
import Filter from "../filter";
import { RiFilterOffFill, RiFilter2Fill } from "react-icons/ri";

import "./Layout.scss";
function Index() {
  let active = "";
  const [filter, setFilter] = useState(false);
  const handleToggleFilter = () => {
    setFilter(!filter);
  };
  filter ? (active = "active") : (active = "");

  const handleHiddenFilter = () => {
    if (window.scrollY > 1 && window.screenY < 2) {
      setFilter(false);
    }
  };
  console.log("scroll filter");
  if (filter === true) window.addEventListener("scroll", handleHiddenFilter);
  else window.removeEventListener("scroll", handleHiddenFilter);

  return (
    <div className="products__content">
      <div
        className="products__content__icon-filter"
        onClick={handleToggleFilter}
      >
        {filter ? <RiFilterOffFill /> : <RiFilter2Fill />}
      </div>
      <div className={`products__content__filter ${active} `}>
        <Filter />
      </div>
      <div className="products__content__list">
        <List />
      </div>
    </div>
  );
}

export default Index;
