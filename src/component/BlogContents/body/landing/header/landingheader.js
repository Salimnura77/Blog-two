import { LoremIpsum } from "lorem-ipsum";
import "./landingheader.css";
import img020 from "./pexels-realtoughcandycom-11035361.jpg";

const Landingheader = ({ data }) => {
  return (
    <div className="blog-container-landing">
      {data && (
        data.articles.map((article, index) => (
          <div key={index} className="landing-header">
            <h1 className="H-h1">
              Why SOC 2 Compliance Is the Gold Standard of Security for SaaS Companies
            </h1>
            <div className="title-wrapper">
              <div className="titlecontent">
                <a href="/author">Bello Ayo Uchenna</a>
                <span className="span1">
                  <span>
                    <a href="/social">socials</a>
                    <span>/</span>
                    <time className="full-date-time" dateTime="2024-02-14T08:00:16">
                      9:00 AM GMT+1<span className="full-date-time__separator">•</span>
                      February 14, 2024
                    </time>
                  </span>
                </span>
              </div>
            </div>
            <div className="img-container">
              <div className="blog-img">
                <img src={img020} alt="Blog Image" className="blog-img-1" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Landingheader;
