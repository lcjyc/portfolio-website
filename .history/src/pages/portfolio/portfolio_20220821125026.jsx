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
        <div className="desc">
          Build with React, Node.js, express, MongoDB
          <br />
          User can register an account for the blog.
          <br />
          After logging in, user can write their own articles in this blog app.
          <br />
        </div>
        <h3></h3>
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
        <div className="desc">
          <h3>
            Build with React, Next.js and MongoDB.
            <br />
            User can order coffee drinks and coffee beans online.
            <br />
            They can pay the bill by Paypal or cash on delivery.
            <br />
            Also, the coffee shop owner (admin account) can control the ordering
            stage and edit the product's information.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
