import Text from "../../Atoms/Text/Text";
import arrow from "../../../assets/Path (1).png";
import "./TextBox.css";

interface TextBoxProps {
  children: string;
}

const TextBox = ({ children }: TextBoxProps) => {
  return (
    <div
      style={{
        padding: "10px 42px",
        borderRadius: "16px 16px 0px 0px ",
        backgroundColor: "#FF8F40",
        width: "126px",
      }}
    >
      <div style={{ width: "150px", minWidth: "", height: "55px" }}>
        <Text>{children}</Text>
        <div
          style={{
            width: "110px",
            height: "30px",
          }}
        >
          <a
            // style={{ textDecoration: "none", display: "flex", gap: "15px" }}
            className="link"
            href="www.facebook.com"
          >
            <div className="link-text">Read more</div>
            <img className="link-img" src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
