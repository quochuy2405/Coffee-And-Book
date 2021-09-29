import React, { useEffect } from "react";
import Header from "../../components/Header";
import ListStore from "../../components/List_Store";
import Slider from "../../components/Slider";

Store.propTypes = {};

function Store(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="body_Page">
        <div className="Slider_Home pt-4">
          <Slider />
        </div>
        <ListStore />
      </div>
    </div>
  );
}

export default Store;
