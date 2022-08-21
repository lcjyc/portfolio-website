import "./home.css";
import profilePic from "../../images/profile-pic.jpg";

const Home = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-name">
            <h2 className="i-intro">Hello, my name is</h2>
            <h1 className="myname">Lesley Chen</h1>
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Front-End Engineer</div>
            </div>
          </div>
          <div className="i-desc">
            <p>
              我是陳嘉彥，臺大經濟系畢業，曾經作過的工作有財務會計、咖啡師以及股票期貨投資操作。我開始學習寫程式約一年的時間，學習寫程式的過程中我得到很多成就感，我很喜歡寫好程式碼之後試用功能的那個moment，如果程式碼無誤當然很快樂，但如果程式碼有錯誤，尋找bug並解決問題也是很有趣的過程。
            </p>
            <br />
            <p>
              我的優點是細心、有美感、邏輯能力強、喜歡解決問題；個人的興趣有咖啡、品茶、烘焙以及攝影，或許可以說我是個理性與感性兼具的人。我相信過往的經歷讓我形成與眾不同的個人特質，期待在未來的職涯能夠闖出自己的一片天。
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profilePic} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Home;
