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
            <Link className="link" to="/bulletin">
              留言板
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <a href="https://www.facebook.com/sourdevil/">
          <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/sourdevil666/">
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <a href="https://github.com/lcjyc/">
          <i className="topIcon fab fa-github-square"></i>
        </a>
        <a href="https://github.com/lcjyc/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"/></svg>
        </a>
      </div>
    </div>
  );
}
