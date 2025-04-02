import dot from "../../../assets/Ellipse 3.png";

interface TestimonialAuthorProps {
  name: string;
  date: string;
}

const TestimonialAuthor = ({ name, date }: TestimonialAuthorProps) => {
  return (
    <div
      style={{
        width: "fit-content",
        height: "25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontWeight: 700, color: "#273D52" }}>{name}</span>
      <img src={dot} />
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  );
};

export default TestimonialAuthor;
