import ImageAtoms from "../../Atoms/ImageAtoms/ImageAtoms";
import TextBox from "../TextBox/TextBox";
import "./BigMolecules.css";

interface BigMoleculesProps {
  title: string;
  imgSrc: string;
}

const BigMolecules = ({ title, imgSrc }: BigMoleculesProps) => {
  return (
    <div className="molecules">
      {/* style={{ position: "absolute" }} */}
      {/* , left: `calc(150px - width/2)` */}
      <div>
        <ImageAtoms imgSrc={imgSrc}></ImageAtoms>
      </div>
      <div
        style={{ position: "absolute", top: "279px", left: "45px", zIndex: 2 }}
      >
        <TextBox>{title}</TextBox>
      </div>
    </div>
  );
};

export default BigMolecules;
