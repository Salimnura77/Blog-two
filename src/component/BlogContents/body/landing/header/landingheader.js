import { LoremIpsum } from "lorem-ipsum";
import "./landingheader.css";
import img020 from "./pexels-realtoughcandycom-11035361.jpg";

const Landingheader = () => {
  return (
    <div className="blog-container-landing">
      <div className="landing-header">
        <h1 className="H-h1">
          Why SOC 2 Compliance Is the Gold Standard of Security for SaaS
          Companies
        </h1>
        <div className="hero-pic">
          <img src={img020} className="H-img" />
          <h4>Bello Ayo uchenna</h4>
          <h6>Head of Information Security Department, ScienceSoft</h6>
        </div>
        <hr />
        <div className="blog-info-container">
          <div className="blog-info-flex-wrap">
            <div className="blog-info-categories">
              <a href="/##" className="category-link">
                Categories
              </a>
            </div>
            <div classname="date">
              <div className="blog-info-time">
                <span className="blog-span-wrapper">Published:</span>
                <time pubdate dateTime>
                  Oct 30, 2024
                </time>
              </div>
              </div>
              <div className="blog-info-readtime">
                <div className="blog-info-time">
                    <i className="icon-s-clocks" />
                    <span className="time-span">5 min read</span>
                </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Landingheader;
