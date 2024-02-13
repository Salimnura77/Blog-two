import Header from "../BlogContents/header/Header";
import "./blog.css";
import Filterbuttons from "../BlogContents/body/buttonfilter/buttonfilter";
import ScrollProgressBar from "../BlogContents/body/3d/scrool";
import Card4 from "../BlogContents/body/card/card4";
import Latestpost from "../BlogContents/body/3d/latestpost";
// import ThreeScene from "../BlogContents/body/3d/box";
// import ThreeTextScene from "../BlogContents/body/3d/3dtext";

const Blog3 = () => {
  const card4 = "Finance"
  return (
    <div className="body">
      <ScrollProgressBar />
      <Header card = {card4}/>
      <Filterbuttons />
      <div className="land">
        <div className="land2">
          <Card4 />
        </div>
        <div className="land1">
          <Latestpost />
        </div>
      </div>
    </div>
  );
};

export default Blog3;
