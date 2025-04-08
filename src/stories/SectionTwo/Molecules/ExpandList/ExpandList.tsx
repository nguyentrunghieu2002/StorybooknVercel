import SectionImage from "../../Atoms/SectionImage/SectionImage";

interface ExpandListProps {
  imgUrl: string;
  tag: string;
  num: number;
  index: number;
  current: number;
  handleCurrent: (indexItem: number) => void;
  setNum: (curItem: number) => void;
}

const ExpandList = ({
  handleCurrent,
  imgUrl,
  tag,
  index,
  current,
  setNum,
}: ExpandListProps) => {
  return (
    <div>
      <SectionImage
        setNum={setNum}
        current={current}
        index={index}
        imgSrc={imgUrl}
        tag={tag}
        variant="no-ex"
        handleCurrent={handleCurrent}
      ></SectionImage>
    </div>
  );
};

export default ExpandList;
