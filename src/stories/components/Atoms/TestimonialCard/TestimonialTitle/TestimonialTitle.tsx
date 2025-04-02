interface TestimonialTitle {
  children: string;
}

const TestimonialTitle = ({ children }: TestimonialTitle) => {
  return (
    <p
      style={{
        height: "fit-content",
        letterSpacing: 0,
        margin: "0px",
        fontWeight: "700",
        fontSize: "24px",
        color: "#FFA26B",
        lineHeight: "30px",
      }}
    >
      {children}
    </p>
  );
};

export default TestimonialTitle;
