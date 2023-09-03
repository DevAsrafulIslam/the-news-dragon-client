import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="bg-secondary text-center text-white py-4 my-4">
      <h3>Zone</h3>
      <img src={qzone1} alt="" />
      <img src={qzone2} alt="" />
      <img src={qzone3} alt="" />
    </div>
  );
};

export default QZone;
