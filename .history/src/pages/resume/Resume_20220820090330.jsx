import React from "react";
import resumePic from "../../images/resume-pic.jpg";
import htmlIcon from "../../icons/icons8-html-5.svg";
import cssIcon from "../../icons/icons8-css3.svg";
import jsIcon from "../../icons/icons8-javascript.svg";
import "./resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <section className="table">
        <table>
          <tr className="tabletop">
            <td>
              <h4>學歷</h4>
            </td>
            <td>國立臺灣大學經濟學系學士 (2013年畢業)</td>
          </tr>
          <tr>
            <td>
              <h4>工作經歷</h4>
            </td>
            <td>
              <ul>
                <li>股票期貨投資操作 (2019.02–now)</li>
                <p>自雇者</p>
                <br />
                <li>黝脈咖啡 (2017.09–2018.09)</li>
                <p>咖啡師</p>
                <br />
                <li>多馬咖啡 (2016.08–2017.03)</li>
                <p>咖啡師</p>
                <br />
                <li>臺大精巧股份有限公司 (2014.12–2015.03)</li>
                <p>財務專員</p>
                <br />
                <li>京傳企業股份有限公司 (2013.08–2014.09)</li>
                <p>財務會計人員</p>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <h4>語言檢定</h4>
            </td>
            <td>TOEIC多益分數: 930／990</td>
          </tr>
          <tr>
            <td>
              <h4>網頁開發專長</h4>
            </td>
            <td>
              <img src={htmlIcon} title="HTML5" alt="HTML5" />
              <img src={cssIcon} title="CSS3" alt="CSS3" />
              <img src={jsIcon} title="JavaScript" alt="JavaScript" />
            </td>
          </tr>
          <tr>
            <td>
              <h4>專業訓練課程</h4>
            </td>
            <td>
              <ul>
                <li>2021網頁開發全攻略 (Udemy線上課程)</li>
                <p>
                  內容涵蓋HTML, CSS, JavaScript, React, Node.js, Express,
                  MongoDB 等應用
                </p>
                <p>總時數65小時</p>
              </ul>
            </td>
          </tr>
        </table>
      </section>

      <section class="picture">
        <img src={resumePic} alt="" />
        <div class="Rectangle"></div>
      </section>
    </div>
  );
}
