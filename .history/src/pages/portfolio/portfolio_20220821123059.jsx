import "./portfolio.css";
import blog from "../../images/blog.jpg";
import coffeeorder from "../../images/coffeeorder.jpg";

const portfolio = () => {
  return (
    <div className="portfolio">
      <div className="left">
        <a
          href="https://lesleyblog.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <h1 className="app">Blog App</h1>
        </a>
        <img src={blog} alt="" className="img" />
      </div>
      <div className="right">
        <a
          href="https://coffee-ordering.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          <h1 className="app">Coffee Ordering App</h1>
        </a>
        <img src={coffeeorder} alt="" className="img" />
      </div>
    </div>
  );
};

export default portfolio;
