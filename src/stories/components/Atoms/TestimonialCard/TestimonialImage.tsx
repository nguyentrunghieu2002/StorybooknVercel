interface TestimonialImageProps {
  img: string;
  width: string;
  height: string;
}

const TestimonialImage = ({ img, width, height }: TestimonialImageProps) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={img}
        style={{
          width: width,
          height: height,
          borderRadius: "10px",
          zIndex: 2,
          backgroundColor: "red",
          position: "relative",
        }}
      ></img>
      <div
        style={{
          width: "350px",
          height: "350px",
          backgroundColor: "#FFC7A6",
          position: "absolute",
          top: "10px",
          left: "10px",
          borderRadius: "10px",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default TestimonialImage;
