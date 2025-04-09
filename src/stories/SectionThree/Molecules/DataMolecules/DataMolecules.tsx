import BigMolecules from "../BigMolecules/BigMolecules";
import image3 from "../../../assets/Group(1).png";
import image2 from "../../../assets/Group(0).png";
import "./DataMolecules.css";

const DataMolecules = () => {
  const data = [
    {
      title: "LOCAL BUDDY",
      imgSrc: "https://www.tubudd.com/static/images/local-buddy.webp",
    },
    {
      title: "HEALTH BUDDY",
      imgSrc: image2,
    },
    {
      title: "BUSINESS BUDDY",
      imgSrc: image3,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "122px", padding: "100px" }}>
      {data?.map((item, index) => (
        <BigMolecules
          key={index}
          imgSrc={item?.imgSrc}
          title={item?.title}
        ></BigMolecules>
      ))}
    </div>
  );
};

export default DataMolecules;
