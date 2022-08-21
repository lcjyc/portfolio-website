import "./portfolio.css";
import blog from "../../images/blog.jpg";
import coffeeorder from "../../images/coffeeorder.jpg";

const portfolio = () => {
  return (
    <div className="portfolio">
      <div className="right">
        <img src={blog} alt="" />
      </div>
      <div className="left">
        <img src={coffeeorder} alt="" />
      </div>
    </div>
  );
};

export default portfolio;
