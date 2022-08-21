import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
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
        </ul>
      </div>
      <div className="topRight">
        <a href="https://github.com/lcjyc/">
          <i className="topIcon fab fa-github-square"></i>
        </a>
      </div>
    </div>
  );
}
