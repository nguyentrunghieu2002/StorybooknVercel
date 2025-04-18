import left from "../../../../assets/Chevron Right.png";
import right from "../../../../assets/Group.png";

interface TestimonialButton {
  handlePrev: () => void;
  handleNext: () => void;
  num: number;
}

const TestimonialButton = ({ handlePrev, handleNext }: TestimonialButton) => {
  // const handleNext = () => {
  //   num === testimonialsData.length - 1
  //     ? setNum(0)
  //     : setNum((prev) => prev + 1);
  // };

  // const handlePrev = () => {
  //   num === 0
  //     ? setNum(testimonialsData.length - 1)
  //     : setNum((prev) => prev - 1);
  // };

  return (
    <div
      style={{
        display: "flex",
        width: "113.55699920654297px",
        justifyContent: "space-between",
      }}
    >
      {/* Nút Previous */}
      <button
        onClick={handlePrev}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          width: "15.878480911254883px",
          height: "29.999652862548828px",
        }}
      >
        <img src={left} style={{ opacity: 0.2 }} alt="Previous" />
      </button>

      {/* Nút Next */}
      <button
        onClick={handleNext}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          width: "15.878480911254883px",
          height: "29.999652862548828px",
        }}
      >
        <img src={right} alt="Next" />
      </button>
    </div>
  );
};

export default TestimonialButton;
