import Header from "../BlogContents/header/Header";
import "./blog.css";
import Filterbuttons from "../BlogContents/body/buttonfilter/buttonfilter";
import Card from "../BlogContents/body/card/card";
import ScrollProgressBar from "../BlogContents/body/3d/scrool";
import Card2 from "../BlogContents/body/card/Card2";
import Latestpost from "../BlogContents/body/3d/latestpost";
// import ThreeScene from "../BlogContents/body/3d/box";
// import ThreeTextScene from "../BlogContents/body/3d/3dtext";

const Blog2 = () => {
  const card2 = "Apple";
  return (
    <div>
      <ScrollProgressBar />
      <Header  card = {card2}/>
      <Filterbuttons />
      <div className="land">
        <div className="land2">
          <Card2 />
        </div>
        <div className="land1">
          <Latestpost />
        </div>
      </div>
    </div>
  );
};

export default Blog2;
