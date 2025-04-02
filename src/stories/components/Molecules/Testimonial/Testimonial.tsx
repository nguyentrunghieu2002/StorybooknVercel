import TestimonialAuthor from "../../Atoms/TestimonialCard/TestimonialAuthor";
import TestimonialContainer from "../../Atoms/TestimonialCard/TestimonialContainer";
import TestimonialText from "../../Atoms/TestimonialCard/TestimonialText";
import QuoteIcon from "../../../assets/Quote.png";
import TestimonialImage from "../../Atoms/TestimonialCard/TestimonialImage";
import TestimonialTitle from "../../Atoms/TestimonialCard/TestimonialTitle/TestimonialTitle";
import TestimonialButton from "../../Atoms/TestimonialCard/TestimonialButton/TestimonialButton";

interface TestimonialProps {
  quote: string;
  author: string;
  date: string;
  className?: string;
  img: string;
  title: string;
  index: number;
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const Testimonial = ({
  index,
  quote,
  author,
  date,
  className = "",
  title,
  img,
  setNum,
  num,
}: TestimonialProps) => {
  console.log(index);
  return (
    <div
      style={{
        display: "flex",
        gap: "134px",
        padding: "159px 222px 111px 234px",
      }}
    >
      <TestimonialImage
        height="350px"
        width="350px"
        img={img}
      ></TestimonialImage>
      <TestimonialContainer className={className}>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <img
            width="42.528133392333984px"
            height="37.5px"
            src={QuoteIcon}
          ></img>
          <TestimonialTitle>{title}</TestimonialTitle>
          <TestimonialText>{quote}</TestimonialText>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TestimonialAuthor name={author} date={date} />
          <TestimonialButton num={num} setNum={setNum} />
        </div>
      </TestimonialContainer>
    </div>
  );
};

export default Testimonial;
