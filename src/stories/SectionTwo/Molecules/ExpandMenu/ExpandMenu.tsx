import SectionImage from "../../Atoms/SectionImage/SectionImage";
import SectionTitle from "../../Atoms/SectionTitle/SectionTitle";
import SectionText from "../../Atoms/SectionText/SectionText";
import SectionButton from "../../Atoms/SectionButton/SectionButton";
import Atoms from "../../Atoms";
import { action } from "@storybook/addon-actions";

interface ExpandMenuProps {
  imgUrl: string;
  description: string;
  tag: string;
  title: string;
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ExpandMenu = ({ imgUrl, description, tag, title }: ExpandMenuProps) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#FFFFFF",
        width: "fit-content",
        borderRadius: "24px",
      }}
    >
      <SectionImage imgSrc={imgUrl} tag={tag}></SectionImage>
      <Atoms>
        <SectionTitle>{title}</SectionTitle>
        <SectionText>{description}</SectionText>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {" "}
          <SectionButton onClick={() => action("Card")(title)}>
            REGISTER NOW
          </SectionButton>
        </div>
      </Atoms>
    </div>
  );
};

export default ExpandMenu;
