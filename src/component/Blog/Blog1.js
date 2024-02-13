import Header from "../BlogContents/header/Header";
import "./blog.css";
import Filterbuttons from "../BlogContents/body/buttonfilter/buttonfilter";
import Card from "../BlogContents/body/card/card";
import ScrollProgressBar from "../BlogContents/body/3d/scrool";
import Latestpost from "../BlogContents/body/3d/latestpost";

const Blog = () => {
  const card = "all categories"
  return (
    <div className="body">
      <ScrollProgressBar />
      <Header  card = {card}/>
      <Filterbuttons />
      <div className="land">
        <div className="land2">
          <Card />
        </div>
        <div className="land1">
          <Latestpost />
        </div>
      </div>
    </div>
  );
};

export default Blog;
