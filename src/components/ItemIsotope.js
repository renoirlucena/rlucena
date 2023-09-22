import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";

const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Video
            </label>
          </div>
        </div>
      </div>
      <div className="box-items">
        <div className="box-item">
          <div className="image">
            <a href="https://vintage-auto-a09e81a72c30.herokuapp.com/" target="_blank" rel="noreferrer" className="has-popup-gallery hover-animated">
              <img src="images/vintage-garage.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Web App</span>
                      <span className="name">Vintage Garage</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-links">
          <div className="image">
            <a
              href="https://my-shift-03a563c50f72.herokuapp.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/myshift.png" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Web App</span>
                      <span className="name">My Shift</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemIsotope;
