import { useState } from "react";
import ExpandList from "../Molecules/ExpandList/ExpandList";
import ExpandMenu from "../Molecules/ExpandMenu/ExpandMenu";
import SectionOrganisms from "../Organisms/SectionOrganisms/SectionOrganisms";
import partnerData from "./DataSection";
import SectionButton from "../Atoms/SectionButton/SectionButton";
import left from "../../assets/Path.png";
import "./TemplateSection.css";
import { action } from "@storybook/addon-actions";

const TemplateSection = () => {
  console.log(111, partnerData);
  const [num, setNum] = useState(0);
  const [current, setCurrent] = useState(0);
  console.log("cur", current);
  console.log("num", num);

  const handleCurrent = (indexItem: number) => {
    setCurrent(indexItem);
  };

  const handleNext = () => {
    current === partnerData.length - 1
      ? setCurrent(0)
      : setCurrent(current + 1);
    num === partnerData.length - 1 ? setNum(0) : setNum((prev) => prev + 1);

    // num !== current ? setNum(current) : "";
  };

  const handlePrev = () => {
    current === 0
      ? setCurrent(partnerData.length - 1)
      : setCurrent(current - 1);
    num === 0 ? setNum(partnerData.length - 1) : setNum((prev) => prev - 1);
  };

  return (
    <SectionOrganisms>
      <SectionButton variant="left-right" onClick={handlePrev}>
        {left}
      </SectionButton>
      <div style={{}}>
        <div>
          {partnerData?.map((item, index) => (
            <>
              {num === index && (
                <div style={{ paddingBottom: "24px" }}>
                  <ExpandMenu
                    imgUrl={item.imgUrl}
                    description={item.description}
                    tag={item.tag}
                    title={item.title}
                  ></ExpandMenu>
                </div>
              )}
            </>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: "55px",
          }}
        >
          {partnerData?.map((item, index) => (
            // <div className={current === index ? "active" : ""}>
            <div onClick={() => action("click")(index)}>
              <ExpandList
                setNum={setNum}
                num={num}
                handleCurrent={handleCurrent}
                key={index}
                current={current}
                index={index}
                imgUrl={item.imgUrl}
                tag={item.tag}
              ></ExpandList>
            </div>
            // </div>
          ))}
        </div>
      </div>
      <SectionButton
        onClick={handleNext}
        transform="rotate(180deg)"
        variant="left-right"
      >
        {left}
      </SectionButton>
    </SectionOrganisms>
  );
};

export default TemplateSection;
