import "./CompanyGrowth.css";
import growthImg1 from "./growthImg1.png";
import growthImg2 from "./growthImg2.png";
import growthImg3 from "./growthImg3.png";
import growthImg4 from "./growthImg4.png";

function CompanyGrowth() {
  return (
    <div className="mainP5">
      <div className="passage5">
        <div>
          <p className="para1">EXPERTS GROWTHS</p>
          <p className="para2">OUR COMPANY GROWTH</p>
        </div>
        <div className="growthCard">
          <div className="growthCard1">
            <img src={growthImg1} alt="" />
            <p className="card1para">199 +</p>
            <p className="card1para2 ">staticfied customers</p>
          </div>
          <div className="growthCard2">
            <img src={growthImg2} alt="" />
            <p className="card2para">1591+</p>
            <p className="card2para2">Day Of Operation</p>
          </div>
          <div className="growthCard3">
            <img src={growthImg3} alt="" />
            <p className="card3para">283 +</p>
            <p className="card3para2">Complete Project</p>
          </div>
          <div className="growthCard4">
            <img src={growthImg4} alt="" />
            <p className="card4para">75 +</p>
            <p className="card4para2">Win Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyGrowth;
