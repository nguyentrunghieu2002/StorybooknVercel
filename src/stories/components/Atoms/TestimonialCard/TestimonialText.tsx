interface TestimonialTextProps {
  children: string;
}

const TestimonialText = ({ children }: TestimonialTextProps) => {
  return (
    <p
      style={{
        height: "fit-content",
        letterSpacing: 0,
        margin: "0px",
        fontWeight: "400",
        fontSize: "15px",
        color: "#273D52",
        lineHeight: "25px",
      }}
    >
      {children}
    </p>
  );
};

export default TestimonialText;
