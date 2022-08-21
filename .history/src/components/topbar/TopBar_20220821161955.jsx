import { Link } from "react-router-dom";
import lesley from "../../images/lesley.png";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img src={lesley} alt="" className="topImg" />
      </div>

      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <i class="fa-solid fa-house-user"></i>
            <Link className="link" to="/">
              首頁
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/resume">
              我的履歷
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              聯絡方式
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/portfolio">
              我的作品集
            </Link>
          </li>
          <li>
            <a href="https://github.com/lcjyc/">
              <i className="topIcon fab fa-github-square"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
