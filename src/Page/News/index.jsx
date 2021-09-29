import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListItemNews from "../../components/ListItemNews";
import "./styles.scss";

News.propTypes = {};

function News(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="News">
      <div className="body_Page">
        <ListItemNews />
      </div>
      <Footer />
    </div>
  );
}

export default News;
