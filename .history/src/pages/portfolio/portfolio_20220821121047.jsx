import "./portfolio.css";
import blog from "../../images/blog.jpg";
import coffeeorder from "../../images/coffeeorder.jpg";

const portfolio = () => {
  return (
    <div className="portfolio">
      <div className="right">
        <a href="https://lesleyblog.herokuapp.com/">
          <h1>Blog APP</h1>
        </a>
        <img src={blog} alt="" />
      </div>
      <div className="left">
        <a href="https://lesleyblog.herokuapp.com/">
          <h1>Coffee Ordering APP</h1>
        </a>
        <img src={coffeeorder} alt="" />
      </div>
    </div>
  );
};

export default portfolio;
