interface SectionTitleProps {
  children: string;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div
      style={{
        fontWeight: 700,
        fontSize: "15px",
        lineHeight: "25px",
        color: "#273D52",
        // display: "",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 1,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default SectionTitle;
