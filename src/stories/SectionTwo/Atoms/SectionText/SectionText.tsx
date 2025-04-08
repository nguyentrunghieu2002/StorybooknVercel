interface SectionText {
  children: string;
}

const SectionText = ({ children }: SectionText) => {
  return (
    <p
      style={{
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "30px",
        color: "#273D52",
        // margin: "30px 0px 16px 0px",

        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 5,
        margin: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </p>
  );
};

export default SectionText;
